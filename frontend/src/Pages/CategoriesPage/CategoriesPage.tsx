import React from "react";
import Categories from "../../Components/Categories/Categories";
import Title from "../../Elements/Title/Title";
import styles from "./CategoriesPage.module.scss";

const CategoriesPage: React.FC = () => {
    return (
        <section className={styles.content}>
            <Title>Categories</Title>
            <Categories count={5} />
        </section>
    );
};

export default CategoriesPage;
