import React from "react";
import styles from "./BtnBanner.module.scss";

interface ButtonProps {
    type?: "button" | "submit";
    onClick?: () => void;
    children: React.ReactNode;
}

const BtnBanner: React.FC<ButtonProps> = ({
    type = "button",
    onClick,
    children,
}) => {
    return (
        <button className={styles.button} type={type}>
            {children}
        </button>
    );
};

export default BtnBanner;
