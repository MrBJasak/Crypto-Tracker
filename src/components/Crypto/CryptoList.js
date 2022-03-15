import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoListElement from './CryptoListElement';
export const vsCurrency = 'usd';
export const perPage = 10;
export const pageNumber = 1;
export const sparkLine = 'true';
// https://api.coingecko.com/api/v3/coins/list
const CryptoList = () => {
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`
            )
            .then((response) => {
                setCryptoList(response.data);
            });
    }, []);

    return (
        <div>
            {cryptoList.map((item) => (
                <CryptoListElement
                    key={item.id}
                    id={item.id}
                    symbol={item.symbol}
                    name={item.name}
                    currentPrice={item.current_price}
                    vsCurrency={vsCurrency}
                    perPage={perPage}
                    pageNumber={pageNumber}
                    sparkLine={sparkLine}
                />
            ))}
        </div>
    );
};

export default CryptoList;
