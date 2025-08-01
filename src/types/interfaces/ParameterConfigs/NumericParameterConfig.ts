import type { ParameterConfig } from '../ParameterConfig';

export interface NumericParameterConfig extends ParameterConfig {
    init: number;
    min: number;
    max: number;
    step: number;
}

export function isNumericParameterConfig(obj: object): obj is NumericParameterConfig {
    return (
        'label' in obj &&
        typeof obj.label === 'string' &&
        'init' in obj &&
        typeof obj.init === 'number' &&
        'min' in obj &&
        typeof obj.min === 'number' &&
        'max' in obj &&
        typeof obj.max === 'number' &&
        'step' in obj &&
        typeof obj.step === 'number'
    );
}
