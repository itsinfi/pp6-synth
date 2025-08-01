import { isNumericParameter, type NumericParameter } from '../Parameters/NumericParameter';
import type { Section } from '../Section';

export interface FilterSection extends Section {
    content: {
        cutoff: NumericParameter;
        res: NumericParameter;
    };
}

export function isFilterSection(obj: object): obj is FilterSection {
    return (
        'cutoff' in obj &&
        typeof obj.cutoff === 'object' &&
        obj.cutoff !== null &&
        isNumericParameter(obj.cutoff) &&
        'res' in obj &&
        typeof obj.res === 'object' &&
        obj.res !== null &&
        isNumericParameter(obj.res)
    );
}
