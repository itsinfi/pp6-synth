import type { NumericParameterConfig, Parameter } from '../../.index';
import { isNumericParameterConfig } from '../ParameterConfigs/NumericParameterConfig';

export interface NumericParameter extends Parameter {
    config: NumericParameterConfig;
    value: number;
}

export function isNumericParameter(obj: object): obj is NumericParameter {
    return (
        'config' in obj &&
        typeof obj.config === 'object' &&
        obj.config !== null &&
        isNumericParameterConfig(obj.config) &&
        'value' in obj &&
        typeof obj.value === 'number'
    );
}
