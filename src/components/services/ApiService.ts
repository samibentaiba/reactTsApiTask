import axios from "axios";
const API_STATS_URL = "https://coinranking1.p.rapidapi.com/stats";
const API_KEY = import.meta.env.VITE_API_KEY_ENV;
export interface BestCoin {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  coinrankingUrl: string;
}

export interface NewestCoin {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  coinrankingUrl: string;
}

export interface StatsResponse {
  referenceCurrencyRate: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
  btcDominance: number;
  bestCoins: BestCoin[];
  newestCoins: NewestCoin[];
}

export const fetchStats = async (): Promise<StatsResponse | null> => {
  try {
    const response = await axios.get<{ data: StatsResponse }>(API_STATS_URL, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
};
