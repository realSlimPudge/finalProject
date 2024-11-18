import React from "react";
import styles from "./Category.module.scss";

const server: string = "http://localhost:3333";

interface CategoryProps {
    title: string;
    image: string;
}

const Category: React.FC<CategoryProps> = ({ title, image }) => {
    return (
        <div className={styles.category__content}>
            <div>
                <img src={server + image} alt={title} />
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Category;
