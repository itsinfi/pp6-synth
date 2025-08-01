import type { Patch } from './Patch';

export interface PlayedPatch {
    ctx: AudioContext;
    now: number;
    freq: number;
    patch: Patch;
}
