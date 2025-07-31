import { manualSynthPanel } from '../data/manualSynthPanel';
import type { SynthPatch } from '../types/.index';

export default function calculateInitSynthPatch(): SynthPatch {
    const initSynthPatch: SynthPatch = {
        freq: 0,
        fAttack: 0,
        fSustain: 0,
        fDR: 0,
        aAttack: 0,
        aSustain: 0,
        aDR: 0,
    };

    Object.entries(manualSynthPanel).forEach(([key, value]) => {
        initSynthPatch[key] = value.init;
    });

    return initSynthPatch;
}
