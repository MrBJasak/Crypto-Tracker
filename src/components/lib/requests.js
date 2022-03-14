import axios from 'axios';
import { vsCurrency, pageNumber, perPage, sparkLine } from '../Crypto/CryptoList';
export const cryptoMoney = 'bitcoin';
const instance = axios.create({ baseURL: 'https://api.coingecko.com/api/v3/' });

export const requests = {
    ping: `${instance}ping`,
    trendingList: `${instance}search/trending`,
    marketsList: `${instance}coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`,
    chart: `${instance}coins/${cryptoMoney}/market_chart?vs_currency=${vsCurrency}&days=max`,
};
