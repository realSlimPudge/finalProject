import React, { useEffect } from "react";
import SaleCard from "../SaleCard/SaleCard";
import styles from "./Sales.module.scss";
import Title from "../../Elements/Title/TItle";
import Separator from "../../Elements/Separator/Separator";
import Navigation from "../../Elements/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/features/productSlice";
const Sales: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const loading = useSelector((state: RootState) => state.products.loading);
    const error = useSelector((state: RootState) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    // добавить скелетон
    if (error) {
        return <div>Error: {error}</div>;
    }

    const sales = products
        .filter((el: any) => el.discont_price)
        .sort((a: any, b: any) => {
            const disA = ((a.price - a.discont_price) / a.price) * 100;
            const disB = ((b.price - b.discont_price) / b.price) * 100;
            return disB - disA;
        })
        .slice(0, 4);

    return (
        <section className={styles.sales__content}>
            <div className={styles.sales__title}>
                <Title>Sales</Title>
                <div>
                    <Separator />
                    <Navigation>All sales</Navigation>
                </div>
            </div>
            <div className={styles.list}>
                {sales.map((el: any) => (
                    <SaleCard
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

export default Sales;
