import type { Panel, PlayedPatch } from '../types/.index';
import { readPanel } from '../utils';

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

function generateSynthSound({
    ctx,
    now,
    freq,
    patch: {
        osc_wav,
        flt_ctf,
        flt_res,
        flt_env_atk,
        // flt_env_dec, // TODO: add decay
        flt_env_sus, // TODO: fix sustain
        flt_env_rel,
        amp_env_atk,
        // amp_env_dec, // TODO: add decay
        amp_env_sus, // TODO: fix sustain
        amp_env_rel,
    },
    gainModifier,
}: PlayedPatch): { osc: OscillatorNode; amp: GainNode } {
    // oscillator
    const osc = ctx.createOscillator();
    osc.type = osc_wav;
    osc.frequency.setValueAtTime(freq, now);

    // filter
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.Q.value = flt_res;

    // apply filter envelope
    lpf.frequency.setValueAtTime(flt_ctf, now);
    lpf.frequency.linearRampToValueAtTime(flt_ctf + flt_env_sus, now + flt_env_atk);
    lpf.frequency.linearRampToValueAtTime(flt_ctf, now + flt_env_atk + flt_env_rel);
    lpf.gain.value = Math.max(Math.max(1 - flt_res * 0.02), 0);

    // amplifier
    const amp = ctx.createGain();

    // apply amplifier envelope
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.linearRampToValueAtTime(
        Math.max((amp_env_sus * 0.5 - 0.01 * flt_res) * gainModifier, 0),
        now + amp_env_atk,
    );
    amp.gain.linearRampToValueAtTime(0.0001, now + amp_env_atk + amp_env_rel);

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
    osc.stop(now + Math.max(flt_env_atk + flt_env_rel, amp_env_atk + amp_env_rel) + 0.1);

    return { osc, amp };
}

export function playNote(panel: Panel) {
    const ctx = audioContext ?? new window.AudioContext();
    audioContext = ctx;

    const now = ctx.currentTime;

    // stop previously started note
    currentOscillator?.stop();
    currentOscillator?.disconnect();
    currentAmp?.disconnect();

    const { osc_frq: freq, ...patch } = readPanel(panel);

    const { osc, amp } = generateSynthSound({ ctx, now, freq, patch, gainModifier: 1 });

    // store oscillator and amp
    currentOscillator = osc;
    currentAmp = amp;
}

export function playChord(panel: Panel) {
    const ctx = audioContext ?? new window.AudioContext();
    audioContext = ctx;

    const now = ctx.currentTime;

    // stop previously started note
    currentOscillator?.stop();
    currentOscillator?.disconnect();
    currentAmp?.disconnect();

    const { osc_frq: rootFreq, ...patch } = readPanel(panel);

    // major 7th chord intervals
    const major7thChord = [1, 1.25, 1.5, 1.875]; // root, major 3rd, fith, major 7th

    major7thChord.forEach((multiplier) => {
        generateSynthSound({
            ctx,
            now,
            freq: rootFreq * multiplier,
            patch: { ...patch, flt_ctf: patch.flt_ctf * multiplier },
            gainModifier: 0.7,
        });
    });
}
