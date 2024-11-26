import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/features/productSlice";
import SaleCard from "../../Components/SaleCard/SaleCard";
import styles from "../ProductsCategories/ProductsCategories.module.scss";
import Title from "../../Elements/Title/Title";
import Filters from "../../Components/Filters/Filters";
import { RootState } from "../../store/store";

const AllProducts: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const loading = useSelector((state: RootState) => state.products.loading);
    const error = useSelector((state: RootState) => state.products.error);

    const filters = useSelector((state: RootState) => state.filters);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

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

    if (loading) {
        return <div>Loading...</div>;
    }
    // добавить скелетон
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section className={styles.content}>
            <div>
                <Title>All products</Title>
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

export default AllProducts;
