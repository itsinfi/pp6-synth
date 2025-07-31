export interface SynthParameter {
    label: string;
    min: number;
    max: number;
    init: number;
    step: number;
}

export interface SynthValue {
    key: string;
    value: number;
}
