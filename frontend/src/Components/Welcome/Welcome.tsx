import React from "react";
import styles from "./Welcome.module.scss";
import Button from "../../Elements/Button/Button";

const Welcome: React.FC = () => {
    return (
        <section className={styles.welcome__content}>
            <p>
                Amazing Discounts <br></br>on Garden Products!
            </p>
            <Button btnContent="Check out" />
        </section>
    );
};

export default Welcome;
