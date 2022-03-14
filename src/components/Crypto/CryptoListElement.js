import React from 'react';
import { vsCurrency } from './CryptoList';
import styles from './CryptoListElement.module.css';
import { Link } from 'react-router-dom';

const CryptoListElement = (props) => {
    return (
        <div className={styles.item}>
            <h1 className="">
                {props.name} {props.symbol}
            </h1>
            <div className={styles.currentPrice}>
                <p>
                    {props.currentPrice} {vsCurrency.toUpperCase()}
                </p>
                <Link className="btn" to={`/list/${props.id}`}>
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default CryptoListElement;
