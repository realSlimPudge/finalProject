import React from "react";
import styles from "./Footer.module.scss";
import Title from "../../Elements/Title/TItle";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footer__content}>
                <Title>Contact</Title>
                <div className={styles.footer__grid}>
                    <div className={styles.footer__cart}>
                        <p>Phone</p>
                        <p>+7 (499) 350-66-04</p>
                    </div>
                    <div className={styles.footer__cart}>
                        <p>Social</p>
                        <div className={styles.footer__img}>
                            <div>
                                <img src="/ic-instagram.svg" alt="" />
                            </div>
                            <div>
                                <img src="/ic-whatsapp.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__cart}>
                        <p>Address</p>
                        <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
                    </div>
                    <div className={styles.footer__cart}>
                        <p>Working Hours</p>
                        <p>24 hours a day</p>
                    </div>
                </div>
                <div className={styles.footer__map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0e1c185bb51ed7e6abc8dc113b8d60e9844bc7e7ed028b58fe05daa406039058&amp;source=constructor"
                        width="100%"
                        height="350"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
