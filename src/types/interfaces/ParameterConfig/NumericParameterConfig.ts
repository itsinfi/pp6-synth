import type { ParameterConfig } from '../ParameterConfig';

export interface NumericParameterConfig extends ParameterConfig {
    init: number;
    min: number;
    max: number;
    step: number;
}
