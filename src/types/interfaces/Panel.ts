import type { EnvelopeSection, FilterSection, OscillatorSection, Section } from '../.index';

export interface Panel {
    oscillator: OscillatorSection;
    filter: FilterSection;
    filterEnvelope: EnvelopeSection;
    ampEnvelope: EnvelopeSection;
}

export interface Panel {
    [key: string]: Section;
}
