import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    placeholder: string;
    name: string;
    error: boolean | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    value: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { placeholder, name, error, onChange, onBlur, value } = props;

    return (
        <input
            className={`${styles.input} ${error ? styles.error : ""}`}
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
        />
    );
});

export default Input;
