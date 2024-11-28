import React, { useState } from "react";
import styles from "./CartItem.module.scss";
import Counter from "../../Elements/Counter/Counter";
import { removeFromCart, updateQuantity } from "../../store/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

interface CartItemProps {
    item: {
        id: string;
        title: string;
        price: number;
        discont_price: number | null;
        image: string;
        quantity: number;
    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const server: string = "http://localhost:3333";
    const dispatch = useDispatch();
    const remove = (id: string) => {
        dispatch(removeFromCart(id));
    };
    const update = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };
    const format = (num1: number, num2: number) => {
        return parseFloat((num1 * num2).toFixed(2));
    };

    const [delItem, setDelItem] = useState<boolean>(false);

    return (
        <div className={`${styles.item} ${delItem ? styles.delete : ""}`}>
            <div className={styles.img}>
                <img src={server + item.image} alt="" />
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__title}>
                    <span>{item.title}</span>
                    <button
                        onClick={() => {
                            setDelItem(true);
                            setTimeout(() => {
                                remove(item.id);
                            }, 500);
                        }}
                    >
                        <img src="/ic x.svg" alt="" />
                    </button>
                </div>
                <div className={styles.cost}>
                    <div>
                        <Counter
                            quantity={item.quantity}
                            onDecrease={() => {
                                update(item.id, item.quantity - 1);
                            }}
                            onIncrease={() => {
                                update(item.id, item.quantity + 1);
                            }}
                        />
                    </div>
                    <div className={styles.cost__info}>
                        {item.discont_price === null ? (
                            <strong>
                                ${format(item.price, item.quantity)}
                            </strong>
                        ) : (
                            <>
                                <strong>
                                    ${format(item.discont_price, item.quantity)}
                                </strong>
                                <s>${format(item.price, item.quantity)}</s>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
