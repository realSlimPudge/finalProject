import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    btnContent: string;
}
const Button: React.FC<ButtonProps> = ({ btnContent }) => {
    return (
        <div className={styles.btn__content}>
            <button>{btnContent}</button>
        </div>
    );
};

export default Button;
