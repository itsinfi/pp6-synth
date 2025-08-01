import { isEnumValue } from '../../utils';

export const ButtonType = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
} as const;

export type ButtonType = keyof typeof ButtonType;

export function isButtonType(val: string): val is ButtonType {
    return isEnumValue(ButtonType, val);
}
