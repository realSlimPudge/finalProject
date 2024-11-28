import React, { useEffect, useState } from "react";
import styles from "./Counter.module.scss";

interface CounterProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

const Counter: React.FC<CounterProps> = ({
    quantity,
    onDecrease,
    onIncrease,
}) => {
    const [redButton, setRedButton] = useState<boolean>(false);
    useEffect(() => {
        if (quantity === 1) {
            setRedButton(true);
        } else {
            setRedButton(false);
        }
    }, [quantity]);

    return (
        <div className={styles.counter}>
            <button
                className={redButton ? `${styles.error}` : ""}
                onClick={() => {
                    if (quantity > 1) {
                        onDecrease();
                    }
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 12H19"
                        stroke="#8B8B8B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <div>
                <span>{quantity}</span>
            </div>
            <button onClick={onIncrease}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 12H19"
                        stroke="#8B8B8B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 5V19"
                        stroke="#8B8B8B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Counter;
