import React from "react";
import Form from "../../Elements/Form/Form";
import styles from "./DiscountForm.module.scss";

const DiscountForm: React.FC = () => {
    return (
        <section className={styles.content}>
            <div className={styles.background}>
                <div>
                    <p>5% off on the first order</p>
                </div>
                <div className={styles.info}>
                    <div>
                        <img src="./image.png" alt="image" />
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountForm;
