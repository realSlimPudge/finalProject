import React from "react";
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

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={server + item.image} alt="" />
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__title}>
                    <span>{item.title}</span>
                    <button onClick={() => remove(item.id)}>
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
                            <strong>${item.price * item.quantity}</strong>
                        ) : (
                            <>
                                <strong>
                                    ${item.discont_price * item.quantity}
                                </strong>
                                <s>${item.price * item.quantity}</s>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
