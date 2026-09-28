"""Tonspur für ein Kursvideo: Sprachaufnahme + leise Musik + Soundeffekte an den Cues der Zeitleiste.
Unter der Sprache wird die Musik abgesenkt (Ducking), die Effekte leiser.
Aufruf: python3 ton.py cues.json dauer musikende ausgabe.wav [sprache.wav versatz]   (braucht numpy)"""
import json, sys, wave
import numpy as np

SR = 48000
rng = np.random.default_rng(7)
T = lambda d: np.arange(int(d * SR)) / SR

def env(n, a=.005, tau=.2):
    t = np.arange(n) / SR
    return np.minimum(t / a, 1) * np.exp(-t / tau)

def tiefpass(x, alpha):
    """Einpoliger Tiefpass; alpha darf ein Array sein (zeitvariabel)."""
    y = np.empty_like(x); v = 0.0
    al = np.broadcast_to(alpha, x.shape)
    for i in range(len(x)):
        v += al[i] * (x[i] - v); y[i] = v
    return y

def whoosh(d=.5):
    n = int(d * SR); t = np.arange(n) / n
    rausch = rng.standard_normal(n)
    alpha = .02 + .25 * np.sin(np.pi * t) ** 2          # Filter öffnet und schließt
    x = tiefpass(rausch, alpha) - tiefpass(rausch, .01)
    return x * np.sin(np.pi * t) ** 1.5 * .9

def sweep(f0, f1, d, tau):
    t = T(d); f = f0 * (f1 / f0) ** (t / d)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .002, tau)

def glocke(f, d=.9, tau=.35):
    t = T(d)
    return (np.sin(2*np.pi*f*t) + .35*np.sin(2*np.pi*f*2.01*t) + .12*np.sin(2*np.pi*f*3.02*t)) * env(len(t), .003, tau)

def muenze():
    t = T(.45); x = sum(a * np.sin(2*np.pi*f*t) for f, a in [(2350, 1), (3520, .6), (4730, .4), (6100, .25)]) * env(len(t), .001, .09)
    y = np.zeros(len(t) + int(.05 * SR)); y[:len(t)] += x; y[int(.05*SR):] += .6 * x
    return y * .35

def tipp():
    x = tiefpass(rng.standard_normal(int(.012 * SR)), .5) * env(int(.012*SR), .0005, .003)
    return x * .5 + .3 * sweep(3200, 2800, .012, .003)

def kritzeln(d=.8):
    n = int(d * SR); t = np.arange(n) / SR
    r = rng.standard_normal(n); x = r - tiefpass(r, .35)
    am = (.5 + .5 * np.sin(2*np.pi*11*t)) ** 2
    return x * am * np.sin(np.pi * t / d) * .18

def scan():
    t = T(.6); f = 500 + 500 * t / .6
    return np.sin(2*np.pi*np.cumsum(f)/SR) * np.sin(np.pi * t / .6) ** 2 * .12

KLAENGE = {
    'whoosh': lambda: whoosh() * .55,
    'pop':    lambda: sweep(950, 320, .09, .04) * .5,
    'plopp':  lambda: sweep(420, 140, .14, .06) * .7,
    'klick':  lambda: sweep(2100, 1900, .02, .006) * .35,
    'muenze': muenze,
    'ding':   lambda: glocke(1318.5, .8, .25) * .22,
    'erfolg': lambda: np.concatenate([glocke(783.99, .12, .2)[:int(.11*SR)], glocke(1046.5, 1.0, .4)]) * .25,
    'tipp':   tipp,
    'kritzeln': kritzeln,
    'scan':   scan,
}

def musik(dauer, ende):
    """100 bpm, C – G – Am – F, gezupftes Arpeggio + weiche Fläche + Bass. Endet auf C."""
    n = int(dauer * SR); out = np.zeros(n + SR * 3)
    beat = .6; takt = 4 * beat
    akkorde = [(48, [60, 64, 67]), (43, [59, 62, 67]), (45, [60, 64, 69]), (41, [60, 65, 69])]
    hz = lambda m: 440 * 2 ** ((m - 69) / 12)
    def zupf(f, d=.9, tau=.28, v=1.):
        t = T(d); return v * (np.sin(2*np.pi*f*t) + .25*np.sin(2*np.pi*2*f*t) + .08*np.sin(2*np.pi*3*f*t)) * env(len(t), .004, tau)
    def lege(x, t0):
        i = int(t0 * SR); out[i:i + len(x)] += x[:len(out) - i]
    k = 0; t0 = 0.0
    while t0 < ende:
        bass, ton = akkorde[k % 4]
        muster = [ton[0], ton[1], ton[2], ton[1] + 12, ton[2], ton[1], ton[0] + 12, ton[2]]
        for j, m in enumerate(muster):
            t = t0 + j * beat / 2
            if t < ende: lege(zupf(hz(m + 12), v=.10 if j % 2 else .13), t)
        for j in (0, 2):
            if t0 + j * beat < ende: lege(zupf(hz(bass), 1.2, .5, .22), t0 + j * beat)
        pad = sum(np.sin(2*np.pi*hz(m)*T(takt)*(1 + d)) for m in ton for d in (-.002, .002))
        pad *= np.sin(np.pi * np.arange(len(pad)) / len(pad)) * .018
        lege(pad, t0)
        t0 += takt; k += 1
    # Schlussakkord
    for m, v in [(48, .22), (60, .12), (64, .1), (67, .1), (72, .09)]:
        lege(zupf(hz(m), 2.5, .9, v), ende)
    out = out[:n]
    ein = np.minimum(np.arange(n) / (.6 * SR), 1)
    return out * ein

def lies_wav(pfad):
    with wave.open(pfad) as w:
        assert w.getframerate() == SR and w.getnchannels() == 1 and w.getsampwidth() == 2, 'Sprache: 48 kHz mono 16 bit erwartet'
        return np.frombuffer(w.readframes(w.getnframes()), '<i2').astype(float) / 32768

def huelle(n, a, b, rampe=.4):
    """1 zwischen a und b (Sekunden), mit weichen Rampen, sonst 0."""
    t = np.arange(n) / SR
    return np.clip(np.minimum((t - a) / rampe + 1, (b - t) / rampe + 1), 0, 1)

def main():
    cues = json.load(open(sys.argv[1])); dauer = float(sys.argv[2]); ende = float(sys.argv[3])
    n = int(dauer * SR)
    sprache = np.zeros(n); unter = np.zeros(n)
    if len(sys.argv) > 6:
        s = lies_wav(sys.argv[5]); i = int(float(sys.argv[6]) * SR)
        sprache[i:i + len(s)] = s[:n - i]
        unter = huelle(n, i / SR, (i + len(s)) / SR)
    musik_pegel = 1 - .88 * unter                 # Musik unter der Stimme auf 12 %
    effekt_pegel = 1 - .6 * unter
    mix = musik(dauer, ende) * .8 * musik_pegel
    for t, k in cues:
        x = KLAENGE[k](); i = int(t * SR)
        if i < n: mix[i:i + len(x)] += (x * effekt_pegel[i:i + len(x)])[:n - i]
    if len(sys.argv) > 6:
        mix = mix / max(1e-9, np.abs(mix).max()) * .35 + sprache / max(1e-9, np.abs(sprache).max()) * .9
    aus = np.minimum(1, (n - np.arange(n)) / (.5 * SR))
    mix *= aus
    mix /= max(1e-9, np.abs(mix).max()) / .89               # Spitze ≈ −1 dBFS
    pcm = (np.clip(mix, -1, 1) * 32767).astype('<i2')
    with wave.open(sys.argv[4], 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

main()
