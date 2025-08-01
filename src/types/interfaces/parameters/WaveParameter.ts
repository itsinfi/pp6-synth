import { isWaveForm, type Parameter, type WaveForm, type WaveParameterConfig } from '../../.index';
import { isWaveParameterConfig } from '../ParameterConfigs/WaveParameterConfig';

export interface WaveParameter extends Parameter {
    config: WaveParameterConfig;
    value: WaveForm;
}

export function isWaveParameter(obj: object): obj is WaveParameter {
    return (
        'config' in obj &&
        typeof obj.config === 'object' &&
        obj.config !== null &&
        isWaveParameterConfig(obj.config) &&
        'value' in obj &&
        typeof obj.value === 'string' &&
        isWaveForm(obj.value)
    );
}
