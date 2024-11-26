import React, { useEffect } from "react";
import Category from "../Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/categorySlice";
import styles from "./Categories.module.scss";
import { RootState } from "../../store/store";

interface CategoriesProps {
    count: number;
}

const Categories: React.FC<CategoriesProps> = ({ count }) => {
    const dispatch = useDispatch();
    const categories = useSelector(
        (state: RootState) => state.categories.categories
    );
    const loading = useSelector((state: RootState) => state.categories.loading);
    const error = useSelector((state: RootState) => state.categories.error);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    // добавить скелетон
    if (error) {
        return <div>Error: {error}</div>;
    }

    const newCategories = categories.slice(0, count);

    return (
        <div className={styles.categories__grid}>
            {newCategories.map((category: any) => (
                <Category
                    key={category.id}
                    title={category.title}
                    image={category.image}
                    id={category.id}
                />
            ))}
        </div>
    );
};

export default Categories;
