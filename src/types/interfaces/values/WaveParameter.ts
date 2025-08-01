import type { Parameter, WaveForm, WaveParameter } from '../../.index';

export interface WaveParameter extends Parameter {
    config: WaveParameter;
    value: WaveForm;
}
