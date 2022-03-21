import axios from 'axios';
const instance = axios.create({ baseURL: 'https://api.coingecko.com/api/v3/' });

const pingApi = () => {
    return `${instance}ping`;
};
const showTrendingList = () => {
    return `${instance}search/trending`;
};

const showMarketsList = (vsCurrency = 'usd', perPage = 10, pageNumber = 1, sparkLine = false) => {
    return `${instance}coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=${sparkLine}`;
};

const chartData = (vsCurrency = 'usd', cryptoCurrency = 'bitcoin', days = 365) => {
    return `${instance}coins/${cryptoCurrency}/market_chart?vs_currency=${vsCurrency}&days=${days}`;
};

export const requests = {
    pingApi: pingApi,
    showTrendingList: showTrendingList,
    showMarketsList: showMarketsList,
    chartData: chartData,
};
