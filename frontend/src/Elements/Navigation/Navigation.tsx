import React from "react";
import styles from './Navigation.module.scss'

const Navigation:React.FC = () =>{
    return(
        <div className={styles.content}>
            <button>
                All categories
            </button>
        </div>
    )
}

export default Navigation