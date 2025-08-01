import type { NumericParameterConfig, Patch, WaveForm, WaveParameterConfig } from '../types/.index';

export const DEFAULT_OSC_WAVE: WaveForm = 'Saw';
export const DEFAULT_OSC_WAVE_LABEL: string = 'Waveform';

export const DEFAULT_OSC_FREQ: number = 440;
export const DEFAULT_OSC_FREQ_LABEL: string = 'Frequency (Hz)';
export const DEFAULT_OSC_FREQ_MIN: number = 25;
export const DEFAULT_OSC_FREQ_MAX: number = 2000;
export const DEFAULT_OSC_FREQ_STEP: number = 0.1;

export const DEFAULT_FILTER_ENV_ATTACK: number = 0.1;
export const DEFAULT_FILTER_ENV_ATTACK_LABEL: string = 'Attack (S)';
export const DEFAULT_FILTER_ENV_ATTACK_MIN: number = 0.01;
export const DEFAULT_FILTER_ENV_ATTACK_MAX: number = 2;
export const DEFAULT_FILTER_ENV_ATTACK_STEP: number = 0.01;

export const DEFAULT_FILTER_ENV_SUSTAIN: number = 1000;
export const DEFAULT_FILTER_ENV_SUSTAIN_LABEL: string = 'Sustain Frequency (Hz)';
export const DEFAULT_FILTER_ENV_SUSTAIN_MIN: number = 200;
export const DEFAULT_FILTER_ENV_SUSTAIN_MAX: number = 5000;
export const DEFAULT_FILTER_ENV_SUSTAIN_STEP: number = 10;

export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE: number = 0.3;
export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_LABEL: string = 'Decay + Release (s)';
export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_MIN: number = 0.05;
export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_MAX: number = 3;
export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_STEP: number = 0.01;

export const DEFAULT_AMP_ENV_ATTACK: number = 0.05;
export const DEFAULT_AMP_ENV_ATTACK_LABEL: string = 'Attack (S)';
export const DEFAULT_AMP_ENV_ATTACK_MIN: number = 0.01;
export const DEFAULT_AMP_ENV_ATTACK_MAX: number = 2;
export const DEFAULT_AMP_ENV_ATTACK_STEP: number = 0.01;

export const DEFAULT_AMP_ENV_SUSTAIN: number = 0.8;
export const DEFAULT_AMP_ENV_SUSTAIN_LABEL: string = 'Sustain Level (0-1)';
export const DEFAULT_AMP_ENV_SUSTAIN_MIN: number = 0;
export const DEFAULT_AMP_ENV_SUSTAIN_MAX: number = 1;
export const DEFAULT_AMP_ENV_SUSTAIN_STEP: number = 0.01;

export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE: number = 0.3;
export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE_LABEL: string = 'Decay + Release (s)';
export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE_MIN: number = 0.05;
export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE_MAX: number = 3;
export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE_STEP: number = 0.01;

export const DEFAULT_OSC_WAVE_CONFIG: WaveParameterConfig = {
    label: DEFAULT_OSC_WAVE_LABEL,
    init: DEFAULT_OSC_WAVE,
};

export const DEFAULT_OSC_FREQ_CONFIG: NumericParameterConfig = {
    label: DEFAULT_OSC_FREQ_LABEL,
    init: DEFAULT_OSC_FREQ,
    min: DEFAULT_OSC_FREQ_MIN,
    max: DEFAULT_OSC_FREQ_MAX,
    step: DEFAULT_OSC_FREQ_STEP,
};

export const DEFAULT_FILTER_ENV_ATTACK_CONFIG: NumericParameterConfig = {
    label: DEFAULT_FILTER_ENV_ATTACK_LABEL,
    init: DEFAULT_FILTER_ENV_ATTACK,
    min: DEFAULT_FILTER_ENV_ATTACK_MIN,
    max: DEFAULT_FILTER_ENV_ATTACK_MAX,
    step: DEFAULT_FILTER_ENV_ATTACK_STEP,
};

export const DEFAULT_FILTER_ENV_SUSTAIN_CONFIG: NumericParameterConfig = {
    label: DEFAULT_FILTER_ENV_SUSTAIN_LABEL,
    init: DEFAULT_FILTER_ENV_SUSTAIN,
    min: DEFAULT_FILTER_ENV_SUSTAIN_MIN,
    max: DEFAULT_FILTER_ENV_SUSTAIN_MAX,
    step: DEFAULT_FILTER_ENV_SUSTAIN_STEP,
};

export const DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_CONFIG: NumericParameterConfig = {
    label: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_LABEL,
    init: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE,
    min: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_MIN,
    max: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_MAX,
    step: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_STEP,
};

export const DEFAULT_AMP_ENV_ATTACK_CONFIG: NumericParameterConfig = {
    label: DEFAULT_AMP_ENV_ATTACK_LABEL,
    init: DEFAULT_AMP_ENV_ATTACK,
    min: DEFAULT_AMP_ENV_ATTACK_MIN,
    max: DEFAULT_AMP_ENV_ATTACK_MAX,
    step: DEFAULT_AMP_ENV_ATTACK_STEP,
};

export const DEFAULT_AMP_ENV_SUSTAIN_CONFIG: NumericParameterConfig = {
    label: DEFAULT_AMP_ENV_SUSTAIN_LABEL,
    init: DEFAULT_AMP_ENV_SUSTAIN,
    min: DEFAULT_AMP_ENV_SUSTAIN_MIN,
    max: DEFAULT_AMP_ENV_SUSTAIN_MAX,
    step: DEFAULT_AMP_ENV_SUSTAIN_STEP,
};

export const DEFAULT_AMP_ENV_DECAY_AND_RELEASE_CONFIG: NumericParameterConfig = {
    label: DEFAULT_AMP_ENV_DECAY_AND_RELEASE_LABEL,
    init: DEFAULT_AMP_ENV_DECAY_AND_RELEASE,
    min: DEFAULT_AMP_ENV_DECAY_AND_RELEASE_MIN,
    max: DEFAULT_AMP_ENV_DECAY_AND_RELEASE_MAX,
    step: DEFAULT_AMP_ENV_DECAY_AND_RELEASE_STEP,
};

export const DEFAULT_PATCH: Patch = {
    wave: {
        config: DEFAULT_OSC_WAVE_CONFIG,
        value: DEFAULT_OSC_WAVE,
    },
    freq: {
        config: DEFAULT_OSC_FREQ_CONFIG,
        value: DEFAULT_OSC_FREQ,
    },
    fAttack: {
        config: DEFAULT_FILTER_ENV_ATTACK_CONFIG,
        value: DEFAULT_FILTER_ENV_ATTACK,
    },
    fSustain: {
        config: DEFAULT_FILTER_ENV_SUSTAIN_CONFIG,
        value: DEFAULT_FILTER_ENV_SUSTAIN,
    },
    fDR: {
        config: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE_CONFIG,
        value: DEFAULT_FILTER_ENV_DECAY_AND_RELEASE,
    },
    aAttack: {
        config: DEFAULT_AMP_ENV_ATTACK_CONFIG,
        value: DEFAULT_AMP_ENV_ATTACK,
    },
    aSustain: {
        config: DEFAULT_AMP_ENV_SUSTAIN_CONFIG,
        value: DEFAULT_AMP_ENV_SUSTAIN,
    },
    aDR: {
        config: DEFAULT_AMP_ENV_DECAY_AND_RELEASE_CONFIG,
        value: DEFAULT_AMP_ENV_DECAY_AND_RELEASE,
    },
};
