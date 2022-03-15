import React from 'react';
import styles from './CryptoListElement.module.css';
import { Link } from 'react-router-dom';

const CryptoListElement = ({ id, symbol, name, currentPrice, vsCurrency }) => {
    return (
        <div className={styles.item}>
            <h1 className="">
                {name} {symbol}
            </h1>
            <div className={styles.currentPrice}>
                <p>
                    {currentPrice} {vsCurrency.toUpperCase()}
                </p>
                <Link className="btn" to={`/list/${id}`}>
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default CryptoListElement;
