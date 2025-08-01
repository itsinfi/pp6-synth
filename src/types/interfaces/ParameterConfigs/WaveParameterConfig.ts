import { isWaveForm, type WaveForm } from '../../.index';
import type { ParameterConfig } from '../ParameterConfig';

export interface WaveParameterConfig extends ParameterConfig {
    init: WaveForm;
}

export function isWaveParameterConfig(obj: object): obj is WaveParameterConfig {
    return (
        'label' in obj &&
        typeof obj.label === 'string' &&
        'init' in obj &&
        typeof obj.init === 'string' &&
        isWaveForm(obj.init)
    );
}
