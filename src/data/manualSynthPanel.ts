import type { SynthPanel } from '../types';

export const manualSynthPanel: SynthPanel = {
    freq: {
        label: 'Frequency (Hz)',
        min: 25,
        max: 2000,
        init: 440,
        step: 0.1,
    },
    fAttack: {
        label: 'Attack (s)',
        min: 0.01,
        max: 2,
        init: 0.1,
        step: 0.01,
    },
    fSustain: {
        label: 'Sustain Frequency (Hz)',
        min: 200,
        max: 5000,
        init: 1000,
        step: 10,
    },
    fDR: {
        label: 'Decay + Release (s)',
        min: 0.05,
        max: 3,
        init: 0.3,
        step: 0.01,
    },
    aAttack: {
        label: 'Attack (s)',
        min: 0.01,
        max: 2,
        init: 0.05,
        step: 0.01,
    },
    aSustain: {
        label: 'Sustain Level (0-1)',
        min: 0,
        max: 1,
        init: 0.8,
        step: 0.01,
    },
    aDR: {
        label: 'Decay + Release (s)',
        min: 0.05,
        max: 3,
        init: 0.3,
        step: 0.01,
    },
};
