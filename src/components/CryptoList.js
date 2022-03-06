import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoListElement from './CryptoListElement';
// https://api.coingecko.com/api/v3/coins/list
const CryptoList = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const perPage = 10;
    const pageNumber = 1;
    const sparkLine = 'true';
    const vsCurrency = 'usd';

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`
            )
            .then((response) => {
                console.log(response.data);
                setCryptoList(response.data);
            });
    }, []);

    return (
        <div>
            {cryptoList.map((item) => (
                <CryptoListElement
                    key={item.id}
                    symbol={item.symbol}
                    name={item.name}
                    currentPrice={item.current_price}
                />
            ))}
        </div>
    );
};

export default CryptoList;
