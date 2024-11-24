import React from "react";
import styles from "./Navigation.module.scss";

interface NavProps {
    children: React.ReactNode;
}

const Navigation: React.FC<NavProps> = ({ children }) => {
    return (
        <div className={styles.content}>
            <button>{children}</button>
        </div>
    );
};

export default Navigation;
