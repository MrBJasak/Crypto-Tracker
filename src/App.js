import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import TrendingList from './components/Trending/TrendingList';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={'/'} exact element={<Navigate to={'/list'} />}></Route>
                    <Route path={'/list'} element={<CryptoList />} />
                    <Route path={'/trending'} exact element={<TrendingList />} />
                    <Route path={'*'} exact element={<NotFound />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
