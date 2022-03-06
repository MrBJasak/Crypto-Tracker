import React from 'react';

const CryptoListElement = ({ symbol, name, currentPrice }) => {
    return (
        <div>
            <h1>
                {name} {symbol}
            </h1>
            <div>
                <span>Current price </span>
                <span>{currentPrice} USD</span>
            </div>
        </div>
    );
};

export default CryptoListElement;
