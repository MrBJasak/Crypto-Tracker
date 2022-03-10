import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

const CryptoListDetails = (props) => {
    const params = useParams();

    return (
        <>
            <h1>Crypto Details</h1>
            <p>{params.cryptoId}</p>
            <Routes>
                <Route path={`/list/${params.cryptoId}`} />
            </Routes>
        </>
    );
};

export default CryptoListDetails;
