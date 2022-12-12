import React, { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
