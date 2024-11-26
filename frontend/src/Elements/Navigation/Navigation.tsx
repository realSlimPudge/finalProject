import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

interface NavProps {
    children: React.ReactNode;
    to: string;
}

const Navigation: React.FC<NavProps> = ({ children, to }) => {
    return (
        <div className={styles.content}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default Navigation;
