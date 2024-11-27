import React from "react";
import styles from "./CartPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Title from "../../Elements/Title/Title";
import Separator from "../../Elements/Separator/Separator";
import Navigation from "../../Elements/Navigation/Navigation";
import BtnCard from "../../Elements/BtnCard/BtnCard";
import CartItem from "../../Components/CartItem/CartItem";
import Form from "../../Elements/Form/Form";

const CartPage: React.FC = () => {
    const server: string = "http://localhost:3333";
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const sum = () => {
        if (items.length > 0) {
            return items.reduce((total, item) => {
                const discont =
                    item.discont_price !== null
                        ? item.discont_price
                        : item.price;
                return total + discont * item.quantity;
            }, 0);
        }
    };
    const totalItems = () => {
        if (items.length > 0) {
            return items.reduce((total, item) => total + item.quantity, 0);
        }
    };

    return (
        <section className={styles.content}>
            <div className={styles.title}>
                <Title>Shopping cart</Title>
                <div className={styles.animated}>
                    <Navigation to="/products">Back to the store</Navigation>
                    <Separator />
                </div>
            </div>
            {items.length === 0 ? (
                <div className={styles.empty}>
                    <p>
                        Looks like you have no items in your basket currently.
                    </p>
                </div>
            ) : (
                <div className={styles.cart}>
                    <div className={styles.items}>
                        {items.map((item) => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info__details}>
                            <div className={styles.title}>Order details</div>
                            <div className={styles.details}>
                                <div>
                                    {totalItems()}{" "}
                                    {items.length === 1 ? "item" : "items"}
                                </div>
                                <div className={styles.total}>
                                    <div>Total</div>
                                    <strong>${sum()}</strong>
                                </div>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            )}
        </section>
    );
};

export default CartPage;
