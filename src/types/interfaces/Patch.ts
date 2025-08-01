import type { NumericParameter, Parameter, WaveParameter } from '../.index';

export interface Patch {
    wave: WaveParameter;
    freq: NumericParameter;
    fQ: NumericParameter;
    fAttack: NumericParameter;
    fSustain: NumericParameter;
    fDR: NumericParameter;
    aAttack: NumericParameter;
    aSustain: NumericParameter;
    aDR: NumericParameter;
}

export interface Patch {
    [key: string]: Parameter;
}
