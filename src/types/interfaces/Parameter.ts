import type { ParameterConfig } from '../.index';

export interface Parameter {
    key: string;
    config: ParameterConfig;
    value: any;
}
