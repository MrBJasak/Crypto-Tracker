import axios from 'axios';
import { vsCurrency, pageNumber, perPage, sparkLine } from '../Crypto/CryptoList';

const instance = axios.create({ baseURL: 'https://api.coingecko.com/api/v3/' });

const requests = {
    trendingList: `${instance}search/trending`,
    marketsList: `${instance}coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`,
};

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}

export default requests;
