import type { MouseEventHandler, ReactNode } from 'react';
import type { ButtonType } from '../../types';
import './Button.scss';

type ButtonProps = {
    buttonType: ButtonType;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ buttonType, children, onClick }: ButtonProps) {
    return (
        <button className={`btn-${buttonType}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
