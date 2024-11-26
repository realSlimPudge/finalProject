import React from "react";
import styles from "./Category.module.scss";
import { Link } from "react-router-dom";

const server: string = "http://localhost:3333";

interface CategoryProps {
    title: string;
    image: string;
    id: string;
}

const Category: React.FC<CategoryProps> = ({ title, image, id }) => {
    return (
        <div className={styles.category__content}>
            <Link to={"/categories/" + id}>
                <div>
                    <img src={server + image} alt={title} />
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default Category;
