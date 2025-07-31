export interface SynthPatch {
    freq: number;
    fAttack: number;
    fSustain: number;
    fDR: number;
    aAttack: number;
    aSustain: number;
    aDR: number;
}

export interface SynthPatch {
    [key: string]: number;
}
