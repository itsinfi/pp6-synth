import type {
    EnvelopeSection,
    FilterSection,
    NumericParameter,
    NumericParameterConfig,
    OscillatorSection,
    Panel,
    WaveForm,
    WaveParameter,
    WaveParameterConfig,
} from '../types/.index';

// Values ----------------------------------------------------------------------------------------------------------------------

export const OSC_SECTION_LABEL: string = 'Oscillator';

export const OSC_WAVE_KEY: string = 'osc_wav';
export const OSC_WAVE: WaveForm = 'Saw';
export const OSC_WAVE_LABEL: string = 'Waveform';

export const OSC_FREQ_KEY: string = 'osc_frq';
export const OSC_FREQ: number = 440;
export const OSC_FREQ_LABEL: string = 'Frequency (Hz)';
export const OSC_FREQ_MIN: number = 25;
export const OSC_FREQ_MAX: number = 2000;
export const OSC_FREQ_STEP: number = 0.1;

export const FLT_SECTION_LABEL: string = 'Filter';

export const FLT_CUTOFF_KEY: string = 'flt_ctf';
export const FLT_CUTOFF: number = 1000;
export const FLT_CUTOFF_LABEL: string = 'Cutoff Frequency (Hz)';
export const FLT_CUTOFF_MIN: number = 1;
export const FLT_CUTOFF_MAX: number = 5000;
export const FLT_CUTOFF_STEP: number = 10;

export const FLT_RESONANCE_KEY: string = 'flt_res';
export const FLT_RESONANCE: number = 5;
export const FLT_RESONANCE_LABEL: string = 'Resonance (DB)';
export const FLT_RESONANCE_MIN: number = 1;
export const FLT_RESONANCE_MAX: number = 25;
export const FLT_RESONANCE_STEP: number = 0.05;

export const FLT_ENV_SECTION_LABEL: string = 'Filter Envelope';

export const FLT_ENV_ATTACK_KEY: string = 'flt_env_atk';
export const FLT_ENV_ATTACK: number = 0.1;
export const FLT_ENV_ATTACK_LABEL: string = 'Attack (S)';
export const FLT_ENV_ATTACK_MIN: number = 0.01;
export const FLT_ENV_ATTACK_MAX: number = 2;
export const FLT_ENV_ATTACK_STEP: number = 0.01;

export const FLT_ENV_DECAY_KEY: string = 'flt_env_dec';
export const FLT_ENV_DECAY: number = 0.3;
export const FLT_ENV_DECAY_LABEL: string = 'Decay (s)';
export const FLT_ENV_DECAY_MIN: number = 0.05;
export const FLT_ENV_DECAY_MAX: number = 3;
export const FLT_ENV_DECAY_STEP: number = 0.01;

export const FLT_ENV_SUSTAIN_KEY: string = 'flt_env_sus';
export const FLT_ENV_SUSTAIN: number = 1000;
export const FLT_ENV_SUSTAIN_LABEL: string = 'Sustain Frequency (Hz)';
export const FLT_ENV_SUSTAIN_MIN: number = 200;
export const FLT_ENV_SUSTAIN_MAX: number = 5000;
export const FLT_ENV_SUSTAIN_STEP: number = 10;

export const FLT_ENV_RELEASE_KEY: string = 'flt_env_rel';
export const FLT_ENV_RELEASE: number = 0.3;
export const FLT_ENV_RELEASE_LABEL: string = 'Release (s)';
export const FLT_ENV_RELEASE_MIN: number = 0.05;
export const FLT_ENV_RELEASE_MAX: number = 5;
export const FLT_ENV_RELEASE_STEP: number = 0.01;

export const AMP_ENV_SECTION_LABEL: string = 'Amplifier Envelope';

export const AMP_ENV_ATTACK_KEY: string = 'amp_env_atk';
export const AMP_ENV_ATTACK: number = 0.05;
export const AMP_ENV_ATTACK_LABEL: string = 'Attack (S)';
export const AMP_ENV_ATTACK_MIN: number = 0.01;
export const AMP_ENV_ATTACK_MAX: number = 2;
export const AMP_ENV_ATTACK_STEP: number = 0.01;

export const AMP_ENV_DECAY_KEY: string = 'amp_env_dec';
export const AMP_ENV_DECAY: number = 0.3;
export const AMP_ENV_DECAY_LABEL: string = 'Decay (s)';
export const AMP_ENV_DECAY_MIN: number = 0.05;
export const AMP_ENV_DECAY_MAX: number = 3;
export const AMP_ENV_DECAY_STEP: number = 0.01;

export const AMP_ENV_SUSTAIN_KEY: string = 'amp_env_sus';
export const AMP_ENV_SUSTAIN: number = 0.8;
export const AMP_ENV_SUSTAIN_LABEL: string = 'Sustain Level (0-1)';
export const AMP_ENV_SUSTAIN_MIN: number = 0;
export const AMP_ENV_SUSTAIN_MAX: number = 1;
export const AMP_ENV_SUSTAIN_STEP: number = 0.01;

export const AMP_ENV_RELEASE_KEY: string = 'amp_env_rel';
export const AMP_ENV_RELEASE: number = 0.3;
export const AMP_ENV_RELEASE_LABEL: string = 'Release (s)';
export const AMP_ENV_RELEASE_MIN: number = 0.05;
export const AMP_ENV_RELEASE_MAX: number = 5;
export const AMP_ENV_RELEASE_STEP: number = 0.01;

// Parameter Configs ----------------------------------------------------------------------------------------------------------------------

export const OSC_WAVE_CONFIG: WaveParameterConfig = {
    label: OSC_WAVE_LABEL,
    init: OSC_WAVE,
};

export const OSC_FREQ_CONFIG: NumericParameterConfig = {
    label: OSC_FREQ_LABEL,
    init: OSC_FREQ,
    min: OSC_FREQ_MIN,
    max: OSC_FREQ_MAX,
    step: OSC_FREQ_STEP,
};

export const FLT_CUTOFF_CONFIG: NumericParameterConfig = {
    label: FLT_CUTOFF_LABEL,
    init: FLT_CUTOFF,
    min: FLT_CUTOFF_MIN,
    max: FLT_CUTOFF_MAX,
    step: FLT_CUTOFF_STEP,
};

export const FLT_RESONANCE_CONFIG: NumericParameterConfig = {
    label: FLT_RESONANCE_LABEL,
    init: FLT_RESONANCE,
    min: FLT_RESONANCE_MIN,
    max: FLT_RESONANCE_MAX,
    step: FLT_RESONANCE_STEP,
};

export const FLT_ENV_ATTACK_CONFIG: NumericParameterConfig = {
    label: FLT_ENV_ATTACK_LABEL,
    init: FLT_ENV_ATTACK,
    min: FLT_ENV_ATTACK_MIN,
    max: FLT_ENV_ATTACK_MAX,
    step: FLT_ENV_ATTACK_STEP,
};

export const FLT_ENV_DECAY_CONFIG: NumericParameterConfig = {
    label: FLT_ENV_DECAY_LABEL,
    init: FLT_ENV_DECAY,
    min: FLT_ENV_DECAY_MIN,
    max: FLT_ENV_DECAY_MAX,
    step: FLT_ENV_DECAY_STEP,
};

export const FLT_ENV_SUSTAIN_CONFIG: NumericParameterConfig = {
    label: FLT_ENV_SUSTAIN_LABEL,
    init: FLT_ENV_SUSTAIN,
    min: FLT_ENV_SUSTAIN_MIN,
    max: FLT_ENV_SUSTAIN_MAX,
    step: FLT_ENV_SUSTAIN_STEP,
};

export const FLT_ENV_RELEASE_CONFIG: NumericParameterConfig = {
    label: FLT_ENV_RELEASE_LABEL,
    init: FLT_ENV_RELEASE,
    min: FLT_ENV_RELEASE_MIN,
    max: FLT_ENV_RELEASE_MAX,
    step: FLT_ENV_RELEASE_STEP,
};

export const AMP_ENV_ATTACK_CONFIG: NumericParameterConfig = {
    label: AMP_ENV_ATTACK_LABEL,
    init: AMP_ENV_ATTACK,
    min: AMP_ENV_ATTACK_MIN,
    max: AMP_ENV_ATTACK_MAX,
    step: AMP_ENV_ATTACK_STEP,
};

export const AMP_ENV_DECAY_CONFIG: NumericParameterConfig = {
    label: AMP_ENV_DECAY_LABEL,
    init: AMP_ENV_DECAY,
    min: AMP_ENV_DECAY_MIN,
    max: AMP_ENV_DECAY_MAX,
    step: AMP_ENV_DECAY_STEP,
};

export const AMP_ENV_SUSTAIN_CONFIG: NumericParameterConfig = {
    label: AMP_ENV_SUSTAIN_LABEL,
    init: AMP_ENV_SUSTAIN,
    min: AMP_ENV_SUSTAIN_MIN,
    max: AMP_ENV_SUSTAIN_MAX,
    step: AMP_ENV_SUSTAIN_STEP,
};

export const AMP_ENV_RELEASE_CONFIG: NumericParameterConfig = {
    label: AMP_ENV_RELEASE_LABEL,
    init: AMP_ENV_RELEASE,
    min: AMP_ENV_RELEASE_MIN,
    max: AMP_ENV_RELEASE_MAX,
    step: AMP_ENV_RELEASE_STEP,
};

// Parameters ----------------------------------------------------------------------------------------------------------------------

export const OSC_WAVE_PARAMETER: WaveParameter = {
    key: OSC_WAVE_KEY,
    config: OSC_WAVE_CONFIG,
    value: OSC_WAVE,
};

export const OSC_FREQ_PARAMETER: NumericParameter = {
    key: OSC_FREQ_KEY,
    config: OSC_FREQ_CONFIG,
    value: OSC_FREQ,
};

export const FLT_CUTOFF_PARAMETER: NumericParameter = {
    key: FLT_CUTOFF_KEY,
    config: FLT_CUTOFF_CONFIG,
    value: FLT_CUTOFF,
};

export const FLT_RESONANCE_PARAMETER: NumericParameter = {
    key: FLT_RESONANCE_KEY,
    config: FLT_RESONANCE_CONFIG,
    value: FLT_RESONANCE,
};

export const FLT_ENV_ATTACK_PARAMETER: NumericParameter = {
    key: FLT_ENV_ATTACK_KEY,
    config: FLT_ENV_ATTACK_CONFIG,
    value: FLT_ENV_ATTACK,
};

export const FLT_ENV_DECAY_PARAMETER: NumericParameter = {
    key: FLT_ENV_DECAY_KEY,
    config: FLT_ENV_DECAY_CONFIG,
    value: FLT_ENV_DECAY,
};

export const FLT_ENV_SUSTAIN_PARAMETER: NumericParameter = {
    key: FLT_ENV_SUSTAIN_KEY,
    config: FLT_ENV_SUSTAIN_CONFIG,
    value: FLT_ENV_SUSTAIN,
};

export const FLT_ENV_RELEASE_PARAMETER: NumericParameter = {
    key: FLT_ENV_RELEASE_KEY,
    config: FLT_ENV_RELEASE_CONFIG,
    value: FLT_ENV_RELEASE,
};

export const AMP_ENV_ATTACK_PARAMETER: NumericParameter = {
    key: AMP_ENV_ATTACK_KEY,
    config: AMP_ENV_ATTACK_CONFIG,
    value: AMP_ENV_ATTACK,
};

export const AMP_ENV_DECAY_PARAMETER: NumericParameter = {
    key: AMP_ENV_DECAY_KEY,
    config: AMP_ENV_DECAY_CONFIG,
    value: AMP_ENV_DECAY,
};

export const AMP_ENV_SUSTAIN_PARAMETER: NumericParameter = {
    key: AMP_ENV_SUSTAIN_KEY,
    config: AMP_ENV_SUSTAIN_CONFIG,
    value: AMP_ENV_SUSTAIN,
};

export const AMP_ENV_RELEASE_PARAMETER: NumericParameter = {
    key: AMP_ENV_RELEASE_KEY,
    config: AMP_ENV_RELEASE_CONFIG,
    value: AMP_ENV_RELEASE,
};

// Sections ----------------------------------------------------------------------------------------------------------------------

export const OSC_SECTION: OscillatorSection = {
    label: OSC_SECTION_LABEL,
    content: {
        wave: OSC_WAVE_PARAMETER,
        freq: OSC_FREQ_PARAMETER,
    },
};

export const FLT_SECTION: FilterSection = {
    label: FLT_SECTION_LABEL,
    content: {
        cutoff: FLT_CUTOFF_PARAMETER,
        res: FLT_RESONANCE_PARAMETER,
    },
};

export const FLT_ENV_SECTION: EnvelopeSection = {
    label: FLT_ENV_SECTION_LABEL,
    content: {
        attack: FLT_ENV_ATTACK_PARAMETER,
        decay: FLT_ENV_DECAY_PARAMETER,
        sustain: FLT_ENV_SUSTAIN_PARAMETER,
        release: FLT_ENV_RELEASE_PARAMETER,
    },
};

export const AMP_ENV_SECTION: EnvelopeSection = {
    label: AMP_ENV_SECTION_LABEL,
    content: {
        attack: AMP_ENV_ATTACK_PARAMETER,
        decay: AMP_ENV_DECAY_PARAMETER,
        sustain: AMP_ENV_SUSTAIN_PARAMETER,
        release: AMP_ENV_RELEASE_PARAMETER,
    },
};

// Paneles ----------------------------------------------------------------------------------------------------------------------

export const INIT_PANEL: Panel = {
    oscillator: OSC_SECTION,
    filter: FLT_SECTION,
    filterEnvelope: FLT_ENV_SECTION,
    ampEnvelope: AMP_ENV_SECTION,
};
