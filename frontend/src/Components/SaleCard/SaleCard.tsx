import React from "react";
import styles from "./SaleCard.module.scss";

const server: string = "http://localhost:3333";

interface SaleCardProps {
    title: string;
    price: number;
    discontPrice: number;
    image: string;
}

const SaleCard: React.FC<SaleCardProps> = ({
    title,
    price,
    discontPrice,
    image,
}) => {
    const procent: number = Math.round(((price - discontPrice) / price) * 100);

    return (
        <div className={styles.content}>
            <div className={styles.procent}>
                <p>{"-" + procent + "%"}</p>
            </div>
            <div className={styles.img}>
                <img src={server + image} alt="" />
            </div>
            <div className={styles.text}>
                <p>{title}</p>
                <div>
                    <strong>{"$" + price}</strong>
                    <s>{"$" + discontPrice}</s>
                </div>
            </div>
        </div>
    );
};

export default SaleCard;
