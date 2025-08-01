import { isNumericParameter, type NumericParameter } from '../Parameters/NumericParameter';
import { isWaveParameter, type WaveParameter } from '../Parameters/WaveParameter';
import type { Section } from '../Section';

export interface OscillatorSection extends Section {
    content: {
        wave: WaveParameter;
        freq: NumericParameter;
    };
}

export function isOscillatorSection(obj: object): obj is OscillatorSection {
    return (
        'wave' in obj &&
        typeof obj.wave === 'object' &&
        obj.wave !== null &&
        isWaveParameter(obj.wave) &&
        'freq' in obj &&
        typeof obj.freq === 'object' &&
        obj.freq !== null &&
        isNumericParameter(obj.freq)
    );
}
