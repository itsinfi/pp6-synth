import { isNumericParameter, type NumericParameter } from '../Parameters/NumericParameter';
import type { Section } from '../Section';

export interface EnvelopeSection extends Section {
    content: {
        attack: NumericParameter;
        decay: NumericParameter;
        sustain: NumericParameter;
        release: NumericParameter;
    };
}

export function isEnvelopeSection(obj: object): obj is EnvelopeSection {
    return (
        'attack' in obj &&
        typeof obj.attack === 'object' &&
        obj.attack !== null &&
        isNumericParameter(obj.attack) &&
        'decay' in obj &&
        typeof obj.decay === 'object' &&
        obj.decay !== null &&
        isNumericParameter(obj.decay) &&
        'sustain' in obj &&
        typeof obj.sustain === 'object' &&
        obj.sustain !== null &&
        isNumericParameter(obj.sustain) &&
        'release' in obj &&
        typeof obj.release === 'object' &&
        obj.release !== null &&
        isNumericParameter(obj.release)
    );
}
