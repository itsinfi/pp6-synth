import { manualSynthPanel } from '../data/manualSynthPanel';
import type { SynthPatch } from '../types/.index';

let audioContext: AudioContext | null = null;

function readPatch(synthPatch: SynthPatch) {
    Object.entries(synthPatch).forEach(([key, synthParameter]) => {
        synthParameter = Math.max(
            Math.min(manualSynthPanel[key].max, synthParameter),
            manualSynthPanel[key].min,
        );
    });

    return synthPatch;
}

export function playNote(synthPatch: SynthPatch) {
    const ctx = audioContext ?? new window.AudioContext();
    const now = ctx.currentTime;

    const { freq, fAttack, fSustain, fDR, aAttack, aSustain, aDR } = readPatch(synthPatch);

    // oscillator
    const osc = ctx.createOscillator();
    osc.type = 'square';
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
