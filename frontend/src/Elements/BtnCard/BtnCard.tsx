import React from "react";
import styles from "./BtnCard.module.scss";

interface BtnCardProps {
    onClick: () => void;
}

const BtnCard: React.FC<BtnCardProps> = ({ onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            Add to cart
        </button>
    );
};

export default BtnCard;
