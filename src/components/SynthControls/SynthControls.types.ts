import type { SynthParameter } from '../SynthParameterSlider';

export interface SynthPanel {
    freq: SynthParameter;
    fAttack: SynthParameter;
    fSustain: SynthParameter;
    fDR: SynthParameter;
    aAttack: SynthParameter;
    aSustain: SynthParameter;
    aDR: SynthParameter;
}

export interface SynthPanel {
    [key: string]: SynthParameter;
}
