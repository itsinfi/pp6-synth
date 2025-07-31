export const ButtonType = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
} as const;

export type ButtonType = keyof typeof ButtonType;
