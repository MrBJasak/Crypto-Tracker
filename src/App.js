import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import CryptoList from './components/Crypto/CryptoList';
import TrendingList from './components/Trending/TrendingList';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
import CryptoListDetails from './components/Crypto/CryptoListDetails';

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={'/'} exact element={<Navigate to={'/list'} />} />
                    <Route path={'/list'} exact element={<CryptoList />} />
                    <Route path={'/list/:cryptoId/*'} element={<CryptoListDetails />} />
                    <Route path={'/trending'} exact element={<TrendingList />} />
                    <Route path={'*'} exact element={<NotFound />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
