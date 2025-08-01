import type { Patch } from '../types/.index';
import { readPatch } from '../utils';

let audioContext: AudioContext | null = null;

export function playNote(patch: Patch) {
    const ctx = audioContext ?? new window.AudioContext();
    const now = ctx.currentTime;

    const { wave, freq, fAttack, fSustain, fDR, aAttack, aSustain, aDR } = readPatch(patch);

    // oscillator
    const osc = ctx.createOscillator();
    osc.type = wave;
    osc.frequency.setValueAtTime(freq, now);

    // filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 24;

    // apply filter envelope
    filter.frequency.setValueAtTime(100, now);
    filter.frequency.linearRampToValueAtTime(fSustain, now + fAttack);
    filter.frequency.linearRampToValueAtTime(100, now + fAttack + fDR);

    // amplifier
    const amp = ctx.createGain();

    // apply amplifier envelope
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.linearRampToValueAtTime(aSustain, now + aAttack);
    amp.gain.linearRampToValueAtTime(0.0001, now + aAttack + aDR);

    // connections
    osc.connect(filter);
    filter.connect(amp);
    amp.connect(ctx.destination);

    // play sound
    osc.start(now);
    osc.stop(now + Math.max(fAttack + fDR, aAttack + aDR) + 0.1);
}
