import type { SynthParameter } from './SynthParameter';

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
