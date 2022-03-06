import React from 'react';
import { Routes, Redirect, Route } from 'react-router-dom';
import CryptoList from './components/CryptoList';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<CryptoList />} />
            </Routes>
        </div>
    );
}

export default App;
