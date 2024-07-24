import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', placeholder, ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosision, setCaretPosision] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (otherProps.autoFocus) {
            ref.current?.focus();
        }
    }, [otherProps.autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosision(e.target.value.length);
    };

    const onBlure = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosision(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper)}>
            {placeholder && (
                <div className={classNames(cls.placeholder)}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={classNames(cls.caretWrapper)}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classNames(cls.input)}
                    onFocus={onFocus}
                    onBlur={onBlure}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused
                && (
                    <span
                        className={classNames(cls.caret)}
                        style={{ left: `${caretPosision * 8.8}px` }}
                    />
                )}
            </div>
        </div>
    );
});
