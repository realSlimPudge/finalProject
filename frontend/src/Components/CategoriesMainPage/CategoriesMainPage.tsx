import React from "react";
import Categories from "../Categories/Categories";
import Title from "../../Elements/Title/TItle";
import Separator from "../../Elements/Separator/Separator";
import Navigation from "../../Elements/Navigation/Navigation";
import styles from './CategoriesMainPage.module.scss'

const CategoriesMainPage:React.FC = () =>{
return(
    <section className={styles.cmp__content}>
        <div className={styles.cmp__title}>
            <Title title={"Categories"}/>
            <div>
                <Separator/>
                <Navigation/>
            </div>
        </div>
        <div>
            <Categories count={4}/>
        </div>
    </section>
)
}

export default CategoriesMainPage