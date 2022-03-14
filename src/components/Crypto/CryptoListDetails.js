import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import CryptoNotFound from '../pages/CryptoNotFound';
import { useState, useEffect } from 'react';
import { vsCurrency, pageNumber, perPage, sparkLine } from './CryptoList';
import axios from 'axios';
import CryptoListDetail from './CryptoListDetail';

const CryptoListDetails = (props) => {
    const [cryptoDetails, setCryptoDetails] = useState([]);
    const params = useParams();

    const fetchCrypto = () => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`
            )
            .then((response) => {
                setCryptoDetails(response.data);
            });
    };

    useEffect(() => {
        fetchCrypto();
    }, []);

    const crypto = cryptoDetails.find((item) => item.id === params.cryptoId);
    // console.log(crypto);
    if (!crypto) {
        return <CryptoNotFound />;
    }

    return (
        <>
            <Routes>
                <Route path={`/list/${params.cryptoId}`} />
            </Routes>
            <div>
                <h1>Crypto Details {params.cryptoId}</h1>
                <CryptoListDetail cryptoName={params.cryptoId} vsCurrency={vsCurrency} />
                {/* <div className={'chart'}>{crypto.sparkline_in_7d.price}</div> */}
            </div>
        </>
    );
};

export default CryptoListDetails;
