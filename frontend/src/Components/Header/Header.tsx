import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header} role="banner">
            <div className={styles.header__content}>
                <div className={styles.header__logo}>
                    <img src="/logo.svg" alt="Logo" draggable="false" />
                </div>
                <nav className={styles.header__nav}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Main Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/categories"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Categories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                All products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sales"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                All sales
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.header__card}>
                    <img src="/basket.svg" alt="cart" draggable="false" />
                </div>
            </div>
        </header>
    );
};

export default Header;
