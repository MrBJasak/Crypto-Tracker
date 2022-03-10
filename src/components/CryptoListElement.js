import React from 'react';
import { vsCurrency } from './CryptoList';

const CryptoListElement = ({ symbol, name, currentPrice }) => {
    return (
        <div>
            <h1>
                {name} {symbol}
            </h1>
            <div>
                <span>Current price </span>
                <span>{currentPrice} {vsCurrency.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default CryptoListElement;
