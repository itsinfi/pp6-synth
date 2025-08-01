import { type Patch } from '../types/.index';
import { WaveForm } from '../types/enums/WaveForm';
import { isNumericParameter } from '../types/interfaces/Parameters/NumericParameter';
import { isWaveParameter } from '../types/interfaces/Parameters/WaveParameter';

export default function readPatch(patch: Patch) {
    const values = new Map();

    Object.entries(patch).forEach(([key, param]) => {
        if (isNumericParameter(param)) {
            values.set(key, Math.max(Math.min(param.config.max, param.value), param.config.min));
        } else if (isWaveParameter(param)) {
            return values.set(key, WaveForm[param.value]);
        } else {
            return values.set(key, param.value);
        }
    });

    return {
        wave: values.get('wave'),
        freq: values.get('freq'),
        fQ: values.get('fQ'),
        fAttack: values.get('fAttack'),
        fSustain: values.get('fSustain'),
        fDR: values.get('fDR'),
        aAttack: values.get('aAttack'),
        aSustain: values.get('aSustain'),
        aDR: values.get('aDR'),
    };
}
