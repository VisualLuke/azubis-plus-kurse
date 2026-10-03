"""Findet und entfernt Schnipsel vom Nachbarsatz in <ordner>/sprache.mp3 (ElevenLabs spricht mit previous_text/next_text
manchmal den Anfang des nächsten Satzes kurz an). Die Stelle wird stumm geschaltet, Zeiten bleiben gleich.
Aufruf: python3 werkzeug/schnipsel.py lernvideos/50-zu-fuss [...] [--reparieren]   danach: rendern.mjs <ordner> --nur-ton"""
import json, subprocess, glob, sys, os, numpy as np
SR=44100; F=441
def pcm(p):
    b=subprocess.run(['ffmpeg','-loglevel','error','-i',p,'-f','s16le','-ac','1','-ar',str(SR),'-'],capture_output=True,check=True).stdout
    return np.frombuffer(b,np.int16).astype(np.float32)
schw=32768*10**(-42/20)
def segmente(l):
    s=[];i=0
    while i<len(l):
        if l[i]:
            k=i
            while k<len(l) and l[k]: k+=1
            s.append([i,k]); i=k
        else: i+=1
    return s
def finde(mp3, js):
    d=json.load(open(js)); x=pcm(mp3); n=len(x)//F
    rms=np.sqrt((x[:n*F].reshape(n,F)**2).mean(1)); laut=rms>schw
    aus=[]
    for s in d['saetze']:
        if not s['woerter']: continue
        a=max(0,int((s['start']-0.03)*100)); b=min(n,int((s['ende']+0.11)*100))
        seg=segmente(laut[a:b])
        # kleine Lücken (<60 ms) innerhalb von Sprache zusammenfassen
        m=[]
        for g in seg:
            if m and g[0]-m[-1][1] < 6: m[-1][1]=g[1]
            else: m.append(g)
        if len(m)<2: continue
        lw=s['woerter'][-1]['ende']; fw=s['woerter'][0]['start']
        e=m[-1]; gap=e[0]-m[-2][1]; t0=(a+e[0])/100
        if e[1]-e[0]<=30 and gap>=10 and t0>=lw-0.05:
            aus.append([round((a+m[-2][1])/100+0.02,2), round((a+e[1])/100+0.03,2),'ende',s['nr'],s['text'][-40:]])
        f=m[0]; gap=m[1][0]-f[1]; t1=(a+f[1])/100
        if f[1]-f[0]<=30 and gap>=10 and t1<=fw+0.05:
            aus.append([round((a+f[0])/100-0.03,2), round((a+m[1][0])/100-0.02,2),'anfang',s['nr'],s['text'][:40]])
    return aus
def reparieren(mp3, stellen):
    x = pcm(mp3).copy(); r = int(.01 * SR)
    for von, bis, *_ in stellen:
        a, b = int(von * SR), min(len(x), int(bis * SR))
        x[a:b] = 0
        x[max(0, a - r):a] *= np.linspace(1, 0, a - max(0, a - r))          # kurze Blende vor der Stille
    roh = mp3 + '.pcm'
    np.clip(x, -32768, 32767).astype('<i2').tofile(roh)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', roh,
                    '-c:a', 'libmp3lame', '-b:a', '160k', mp3], check=True)
    os.remove(roh)

if __name__ == '__main__':
    rep = '--reparieren' in sys.argv
    ordner = [a for a in sys.argv[1:] if not a.startswith('--')]
    for o in ordner:
        js = os.path.join(o, 'sprache.json'); mp3 = os.path.join(o, 'sprache.mp3')
        f = finde(mp3, js)
        print(f'== {o}: {len(f)} Schnipsel')
        for z in f: print('   ', *z)
        if rep and f:
            reparieren(mp3, f)
            rest = finde(mp3, js)
            print(f'   repariert, danach {len(rest)} Funde')
