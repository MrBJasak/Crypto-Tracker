import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { requests } from '../lib/requests';
import { Chart as ChartJS } from 'chart.js/auto';
import LineChart from './LineChart';

const CryptoListDetail = (props) => {
    const [marketCaps, setMarketCaps] = useState([]);
    const [prices, setPrices] = useState([]);
    const [totalVolumes, setTotalVolumes] = useState([]);
    const fetchChartData = () => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${props.cryptoName}/market_chart?vs_currency=${props.vsCurrency}&days=7`
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
            <div className="chart" style={{ width: '500px', height: '200px' }}>
                <LineChart
                    name={props.cryptoName}
                    labels={marketCaps}
                    data={prices}
                    totalVolumes={totalVolumes}
                    vsCurrency={props.vsCurrency}
                />
            </div>
        </div>
    );
};

export default CryptoListDetail;
