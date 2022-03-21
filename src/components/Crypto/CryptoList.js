import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoListElement from './CryptoListElement';
import { Grid, Container } from '@mui/material';

export let vsCurrency = 'usd';
export let perPage = 10;
export let pageNumber = 1;
export const sparkLine = 'true';

// https://api.coingecko.com/api/v3/coins/list
const CryptoList = () => {
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${(vsCurrency =
                    'pln')}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`
            )
            .then((response) => {
                console.log(response.data);
                setCryptoList(response.data);
            });
    }, []);

    return (
        <Container>
            <Grid container spacing={1}>
                {cryptoList.map((item) => (
                    <CryptoListElement
                        key={item.id}
                        id={item.id}
                        symbol={item.symbol}
                        image={item.image}
                        name={item.name}
                        currentPrice={item.current_price}
                        vsCurrency={vsCurrency}
                        perPage={perPage}
                        pageNumber={pageNumber}
                        sparkLine={sparkLine}
                    />
                ))}
            </Grid>
        </Container>
    );
};

export default CryptoList;
