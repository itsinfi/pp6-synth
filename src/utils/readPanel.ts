import { type Panel, type Patch } from '../types/.index';
import { WaveForm } from '../types/enums/WaveForm';
import { isNumericParameter } from '../types/interfaces/Parameters/NumericParameter';
import { isWaveParameter } from '../types/interfaces/Parameters/WaveParameter';

export default function readPanel(panel: Panel): { osc_frq: number } & Patch {
    const values: Record<string, number | string> = {};

    Object.values(panel).forEach((section) => {
        Object.values(section.content).forEach((param) => {
            if (isNumericParameter(param)) {
                values[param.key] = Math.max(
                    Math.min(param.config.max, param.value),
                    param.config.min,
                );
            } else if (isWaveParameter(param)) {
                return (values[param.key] = WaveForm[param.value]);
            } else {
                return (values[param.key] = param.value);
            }
        });
    });

    return values as unknown as { osc_frq: number } & Patch;
}
