import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
    link: string;
}
const Button: React.FC<ButtonProps> = ({ children, link }) => {
    return (
        <div className={styles.btn__content}>
            <Link to={link}>{children}</Link>
        </div>
    );
};

export default Button;
