import React, {
    useEffect, useRef, useState, InputHTMLAttributes, memo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IProps extends HTMLInputProps {
    type?: string,
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    placeholder?: string,
    autofocus?: boolean
}

const Input = memo((props: IProps) => {
    const {
        type = 'text',
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: any) => {
        console.log(e?.target?.selectionStart);
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(styles.Input, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {placeholder}
                </div>
            )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;
