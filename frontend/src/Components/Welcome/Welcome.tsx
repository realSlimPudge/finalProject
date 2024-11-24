import React from "react";
import styles from "./Welcome.module.scss";
import Button from "../../Elements/Button/Button";

const Welcome: React.FC = () => {
    return (
        <section className={styles.welcome__content}>
            <p>
                Amazing Discounts <br></br>on Garden Products!
            </p>
            <Button>Check out</Button>
        </section>
    );
};

export default Welcome;
