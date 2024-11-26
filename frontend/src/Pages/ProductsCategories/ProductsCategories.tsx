import React, { useEffect } from "react";
import styles from "./ProductsCategories.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCtg } from "../../store/features/productsCtgSlice";
import SaleCard from "../../Components/SaleCard/SaleCard";
import Title from "../../Elements/Title/Title";
import Filters from "../../Components/Filters/Filters";
import { RootState } from "../../store/store";

const ProductsCategories: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const dispatch = useDispatch();
    const productsCtg = useSelector(
        (state: RootState) => state.productsCtg.productsCtg
    );
    const loading = useSelector(
        (state: RootState) => state.productsCtg.loading
    );
    const error = useSelector((state: RootState) => state.productsCtg.error);

    const filters = useSelector((state: RootState) => state.filters);

    useEffect(() => {
        dispatch(fetchProductsCtg(categoryId));
    }, [categoryId, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    // добавить скелетон
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!productsCtg || !productsCtg.category || !productsCtg.data) {
        return <div>No data available</div>;
    }

    const category = productsCtg.category;
    const products = productsCtg.data;

    const filtredProducts = products
        .filter((el) => {
            const price =
                el.discont_price !== null ? el.discont_price : el.price;
            if (filters.showDisconted && el.discont_price === null)
                return false;
            if (filters.minPrice !== null && price < filters.minPrice)
                return false;
            if (filters.maxPrice !== null && price > filters.maxPrice)
                return false;
            return true;
        })
        .sort((a, b) => {
            const priceA = a.discont_price !== null ? a.discont_price : a.price;
            const priceB = b.discont_price !== null ? b.discont_price : b.price;
            if (filters.sortBy === "priceAsc") {
                return priceA - priceB;
            } else if (filters.sortBy === "priceDesc") {
                return priceB - priceA;
            } else {
                return 0;
            }
        });
    return (
        <section className={styles.content}>
            <div className={styles.title}>
                <Title>{category.title}</Title>
            </div>
            <Filters visibility={true} />
            <div className={styles.grid}>
                {filtredProducts.map((el: any) => (
                    <SaleCard
                        key={el.id}
                        title={el.title}
                        price={el.price}
                        discontPrice={el.discont_price}
                        image={el.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductsCategories;
