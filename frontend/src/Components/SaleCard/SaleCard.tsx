import React from "react";
import styles from "./SaleCard.module.scss";
import BtnCard from "../../Elements/BtnCard/BtnCard";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../store/features/cartSlice";
import { useDispatch } from "react-redux";

const server: string = "http://localhost:3333";

interface SaleCardProps {
    id: number;
    title: string;
    price: number;
    discontPrice: number | null;
    image: string;
}

const SaleCard: React.FC<SaleCardProps> = ({
    id,
    title,
    price,
    discontPrice,
    image,
}) => {
    const dispatch = useDispatch();
    const newId: string = Number(id);
    const procent: number | null =
        discontPrice !== null
            ? Math.round(((price - discontPrice) / price) * 100)
            : null;

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: newId,
                title: title,
                price: price,
                discont_price: discontPrice,
                image: image,
                quantity: 1,
            })
        );
    };

    const handleDeleteItem = (id: string) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className={styles.content}>
            {procent !== null && (
                <div className={styles.procent}>
                    <p>{"-" + procent + "%"}</p>
                </div>
            )}
            <div className={styles.img}>
                <img src={server + image} alt="" />
                <div className={styles.btn__container}>
                    <BtnCard
                        onClick={handleAddToCart}
                        delete={handleDeleteItem}
                        newId={newId}
                    />
                </div>
            </div>
            <Link to={"/products/" + id}>
                <div className={styles.text}>
                    <p>{title}</p>
                    <div>
                        <strong>
                            ${procent === null ? price : discontPrice}
                        </strong>
                        {procent !== null && <s>${price}</s>}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SaleCard;
