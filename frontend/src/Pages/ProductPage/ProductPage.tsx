import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { fetchItem } from "../../store/features/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import BtnCard from "../../Elements/BtnCard/BtnCard";
import {
    addToCart,
    removeFromCart,
    updateQuantity,
} from "../../store/features/cartSlice";
import Counter from "../../Elements/Counter/Counter";

const ProductPage: React.FC = () => {
    const server: string = "http://localhost:3333";

    const { productId } = useParams<{ productId: string }>();

    const dispatch = useDispatch();
    const item = useSelector((state: RootState) => state.item.item);
    const loading = useSelector((state: RootState) => state.item.loading);
    const error = useSelector((state: RootState) => state.item.error);
    const cartItemId = useSelector((state: RootState) => state.cart.items);

    const [newItem, setNewItem] = useState<any>(null);
    const [showCounter, setShowCounter] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchItem(productId));
    }, [productId, dispatch]);

    useEffect(() => {
        if (item && item.length > 0) {
            setNewItem(item[0]);
        }
    }, [item]);

    useEffect(() => {
        if (newItem) {
            const isInCart: boolean = cartItemId.some(
                (item) => item.id === newItem.id
            );
            setShowCounter(isInCart);
            const count = cartItemId.find((item) => item.id === newItem.id);
            setQuantity(count ? count.quantity : 0);
        }
    }, [newItem, cartItemId]);

    const update = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!newItem) {
        return <div>пошол нахуй</div>;
    }

    const procent: number | null =
        newItem.discont_price !== null
            ? Math.round(
                  ((newItem.price - newItem.discont_price) / newItem.price) *
                      100
              )
            : null;

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                discont_price: newItem.discont_price,
                image: newItem.image,
                quantity: 1,
            })
        );
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromCart(id));
    };

    return (
        <section className={styles.content}>
            <div>
                <div className={styles.img}>
                    <img src={server + newItem.image} alt={newItem.title} />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{newItem.title}</div>
                    <div className={styles.cost}>
                        {procent === null ? (
                            <div className={styles.price}>
                                <strong>${newItem.price}</strong>
                            </div>
                        ) : (
                            <>
                                <div className={styles.dollar}>
                                    <div className={styles.price}>
                                        <strong>
                                            ${newItem.discont_price}
                                        </strong>
                                    </div>
                                    <div className={styles.sale}>
                                        <s>${newItem.price}</s>
                                    </div>
                                </div>
                                <div className={styles.procent}>
                                    -{procent}%
                                </div>
                            </>
                        )}
                    </div>
                    <div className={styles.add}>
                        {showCounter && (
                            <Counter
                                quantity={quantity}
                                onDecrease={() => {
                                    update(newItem.id, quantity - 1);
                                }}
                                onIncrease={() => {
                                    update(newItem.id, quantity + 1);
                                }}
                            />
                        )}
                        <BtnCard
                            onClick={handleAddToCart}
                            delete={handleRemoveItem}
                            newId={newItem.id}
                        />
                    </div>
                    <div className={styles.description}>
                        <strong>Description</strong>
                        <p>{newItem.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
