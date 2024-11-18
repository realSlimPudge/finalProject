import React from "react";
import styles from "./Title.module.scss"

interface TitleProps{
    title:string
}

const Title:React.FC<TitleProps> = ({title}) =>{
    return(
        <div className={styles.title}>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Title