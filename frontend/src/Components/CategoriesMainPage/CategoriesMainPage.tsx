import React from "react";
import Categories from "../Categories/Categories";
import Title from "../../Elements/Title/Title";
import Separator from "../../Elements/Separator/Separator";
import Navigation from "../../Elements/Navigation/Navigation";
import styles from "./CategoriesMainPage.module.scss";

const CategoriesMainPage: React.FC = () => {
    return (
        <section className={styles.cmp__content}>
            <div className={styles.cmp__title}>
                <Title>Categories</Title>
                <div className={styles.animated}>
                    <Navigation to="/categories">All categories</Navigation>
                    <Separator />
                </div>
            </div>
            <div>
                <Categories count={4} />
            </div>
        </section>
    );
};

export default CategoriesMainPage;
