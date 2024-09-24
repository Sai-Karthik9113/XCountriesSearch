import React from "react";
import styles from './Card.module.css';
import uniqueId from "../helpers";

const Card = ({ data }) => {
    
    return (
        <div className={styles.grid}>
            {
                data.map((val) => (
                    <div className={styles.countryCard} key={uniqueId()}>
                        <img className={styles.flags} src={val.flags.svg} alt={val.name.common} />
                        <p className={styles.countryName}>{val.name.common}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default Card;