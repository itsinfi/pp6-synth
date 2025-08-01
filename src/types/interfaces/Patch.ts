import type { EnvelopeSection, FilterSection, OscillatorSection, Section } from '../.index';

export interface Patch {
    oscillator: OscillatorSection;
    filter: FilterSection;
    filterEnvelope: EnvelopeSection;
    ampEnvelope: EnvelopeSection;
}

export interface Patch {
    [key: string]: Section;
}
