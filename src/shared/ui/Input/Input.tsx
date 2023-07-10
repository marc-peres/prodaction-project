import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    autoFocus?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = 'text',
        label,
        autoFocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                ref={ref}
                id="customInput"
                type={type}
                required
                onChange={onInputChange}
                {...otherProps}
            />
            <span className={cls.bar} />
            {label && <label htmlFor="customInput">{label}</label>}
        </div>
    );
};
