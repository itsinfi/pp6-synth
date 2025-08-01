import type { Patch } from '../types/.index';
import { isNumericParameter } from '../types/interfaces/Parameters/NumericParameter';

export default function readPatch(patch: Patch) {
    const values = new Map();

    Object.entries(patch).forEach(([key, param]) => {
        if (isNumericParameter(param)) {
            values.set(key, Math.max(Math.min(param.config.max, param.value), param.config.min));
        } else {
            return values.set(key, param.value);
        }
    });

    return {
        wave: values.get('wave'),
        freq: values.get('freq'),
        fAttack: values.get('fAttack'),
        fSustain: values.get('fSustain'),
        fDR: values.get('fDR'),
        aAttack: values.get('aAttack'),
        aSustain: values.get('aSustain'),
        aDR: values.get('aDR'),
    };
}
