import React from "react";
import styles from './DiscountForm.module.scss'



const DiscountForm:React.FC = () =>{
    return(
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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscountForm