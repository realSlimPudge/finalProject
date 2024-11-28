import React, { useEffect, useState } from "react";
import styles from "./BtnCard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface BtnCardProps {
    onClick: () => void;
    delete: (id: string) => void;
    newId: string;
}

const BtnCard: React.FC<BtnCardProps> = ({
    onClick,
    newId,
    delete: deleteFunc,
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const itemId = useSelector((state: RootState) => state.cart.items);
    useEffect(() => {
        const isInCart: boolean = itemId.some((item) => item.id === newId);
        setClicked(isInCart);
    }, [itemId, newId]);

    return (
        <button
            className={`${styles.btn} ${clicked ? styles.clicked : ""}`}
            onClick={() => {
                if (clicked) {
                    deleteFunc(newId);
                    setClicked(false);
                } else {
                    onClick();
                    setClicked(true);
                }
            }}
        >
            {!clicked ? "Add to cart" : "Delete from cart"}
        </button>
    );
};

export default BtnCard;
