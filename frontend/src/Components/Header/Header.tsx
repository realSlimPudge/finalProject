import React from "react";
import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import Cart from "../../Elements/Cart/Cart";

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
                <Cart />
            </div>
        </header>
    );
};

export default Header;
