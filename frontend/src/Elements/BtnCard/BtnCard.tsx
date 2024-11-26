import React from "react";
import styles from "./BtnCard.module.scss";

const BtnCard: React.FC = () => {
    return <button className={styles.btn}>Add to cart</button>;
};

export default BtnCard;
