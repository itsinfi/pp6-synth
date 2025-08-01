import { isEnumValue } from '../../utils';

export const WaveForm = {
    Sine: 'sine',
    Triangle: 'triangle',
    Saw: 'sawtooth',
    Square: 'square',
} as const;

export type WaveForm = keyof typeof WaveForm;

export function isWaveForm(val: string): val is WaveForm {
    return isEnumValue(WaveForm, val);
}
