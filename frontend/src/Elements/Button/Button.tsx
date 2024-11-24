import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className={styles.btn__content}>
            <button>{children}</button>
        </div>
    );
};

export default Button;
