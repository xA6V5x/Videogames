import React from "react";
import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.spinner_container}>
            {/* <div className={styles.spinner}>
                <div className={styles.loaderl1}></div>
                <div className={styles.loaderl2}></div>
            </div> */}
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
        </div>
        //     <div className={style.spinner}>
        //     </div>
    );
};

export default Spinner;