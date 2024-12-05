import React from "react";
import styles from "./CartPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Title from "../../Elements/Title/Title";
import Separator from "../../Elements/Separator/Separator";
import Navigation from "../../Elements/Navigation/Navigation";
import CartItem from "../../Components/CartItem/CartItem";
import axios from "axios";

const CartPage: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    const sum = () => {
        if (items.length > 0) {
            return items.reduce((total, item) => {
                const discont =
                    item.discont_price !== null
                        ? item.discont_price
                        : item.price;
                return parseFloat((total + discont * item.quantity).toFixed(2));
            }, 0);
        }
    };
    const totalItems = () => {
        if (items.length > 0) {
            return items.reduce((total, item) => total + item.quantity, 0);
        }
    };

    const sendOrder = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3333/sale/send",
                items,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Ответ", response.data);
            return response.data;
        } catch (error) {
            console.error("Ошибка нах", error);
            throw error;
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
                        <button className={styles.order} onClick={sendOrder}>
                            Order
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CartPage;
