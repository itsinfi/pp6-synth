import type { Patch } from '../types/.index';
import { readPatch } from '../utils';

let audioContext: AudioContext | null = null;
let currentOscillator: OscillatorNode | null = null;
let currentAmp: GainNode | null = null;

function createSoftClipper(ctx: AudioContext) {
    const waveShaper = ctx.createWaveShaper();
    const curve = new Float32Array(65536);
    for (let i = 0; i < curve.length; i++) {
        const x = (i * 2) / 65536 - 1;
        curve[i] = Math.tanh(x); // smooth clip
    }
    waveShaper.curve = curve;
    waveShaper.oversample = '4x';
    return waveShaper;
}

export function playNote(patch: Patch) {
    const ctx = audioContext ?? new window.AudioContext();
    audioContext = ctx;

    const now = ctx.currentTime;

    // stop previously started note
    currentOscillator?.stop();
    currentOscillator?.disconnect();
    currentAmp?.disconnect();

    const { wave, freq, fQ, fAttack, fSustain, fDR, aAttack, aSustain, aDR } = readPatch(patch);

    // oscillator
    const osc = ctx.createOscillator();
    osc.type = wave;
    osc.frequency.setValueAtTime(freq, now);

    // filter
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.Q.value = fQ;

    // apply filter envelope
    lpf.frequency.setValueAtTime(1, now);
    lpf.frequency.linearRampToValueAtTime(fSustain, now + fAttack);
    lpf.frequency.linearRampToValueAtTime(1, now + fAttack + fDR);
    lpf.gain.value = Math.max(Math.max(1 - fQ * 0.02), 0);

    // amplifier
    const amp = ctx.createGain();

    // apply amplifier envelope
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.linearRampToValueAtTime(Math.max(aSustain * 0.5 - 0.01 * fQ, 0), now + aAttack);
    amp.gain.linearRampToValueAtTime(0.0001, now + aAttack + aDR);

    // master filter (for removing artefacts below 20hz for cleaner sound quality)
    const hpf = ctx.createBiquadFilter();
    hpf.type = 'highpass';
    hpf.frequency.setValueAtTime(30, now);

    // limiter
    const lim = ctx.createDynamicsCompressor();
    lim.threshold.setValueAtTime(-5, ctx.currentTime);
    lim.knee.setValueAtTime(0, ctx.currentTime);
    lim.ratio.setValueAtTime(20, ctx.currentTime);
    lim.attack.setValueAtTime(0.001, ctx.currentTime);
    lim.release.setValueAtTime(0.05, ctx.currentTime);

    // soft clipper
    const scl = createSoftClipper(ctx);

    // connections
    osc.connect(lpf);
    lpf.connect(amp);
    amp.connect(hpf);
    hpf.connect(scl);
    scl.connect(ctx.destination);

    // play sound
    osc.start(now);
    osc.stop(now + Math.max(fAttack + fDR, aAttack + aDR) + 0.1);

    currentOscillator = osc;
    currentAmp = amp;
}
