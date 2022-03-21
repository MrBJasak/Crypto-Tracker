import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoListDetail = ({ cryptoName, vsCurrency }) => {
    const [marketCaps, setMarketCaps] = useState([]);
    const [prices, setPrices] = useState([]);
    const [totalVolumes, setTotalVolumes] = useState([]);

    const days = 7;
    const fetchChartData = () => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=${vsCurrency}&days=${days}`
            )
            .then((response) => {
                console.log(response.data);
                const marketCaps = response.data.market_caps;
                const prices = response.data.prices;
                const totalVolumes = response.data.total_volumes;
                setMarketCaps(marketCaps);
                setPrices(prices);
                setTotalVolumes(totalVolumes);
            });
    };

    useEffect(() => {
        fetchChartData();
    }, []);
    console.log(marketCaps);
    return (
        <div>
            <div>
                <span>{crypto.current_price}</span>
                current_price
                <span>{crypto.high_24h}</span>
                high_24h
                <span>{crypto.low_24h}</span>
                low_24h
            </div>
        </div>
    );
};

export default CryptoListDetail;
