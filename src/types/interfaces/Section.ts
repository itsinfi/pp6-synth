import type { Parameter } from './Parameter';

export interface Section {
    label: string;
    content: Record<string, Parameter>;
}
