import React from "react";
import styles from "./SaleCard.module.scss";
import BtnCard from "../../Elements/BtnCard/BtnCard";

const server: string = "http://localhost:3333";

interface SaleCardProps {
    title: string;
    price: number;
    discontPrice: number | null;
    image: string;
}

const SaleCard: React.FC<SaleCardProps> = ({
    title,
    price,
    discontPrice,
    image,
}) => {
    const procent: number | null =
        discontPrice !== null
            ? Math.round(((price - discontPrice) / price) * 100)
            : null;

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
                    <BtnCard />
                </div>
            </div>
            <div className={styles.text}>
                <p>{title}</p>
                <div>
                    <strong>${procent === null ? price : discontPrice}</strong>
                    {procent !== null && <s>${price}</s>}
                </div>
            </div>
        </div>
    );
};

export default SaleCard;
