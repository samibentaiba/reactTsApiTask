import React, { useEffect, useState } from "react";
import { fetchStats, StatsResponse } from "./services/ApiService.ts";

const StatsDashboard: React.FC = () => {
  const [stats, setStats] = useState<StatsResponse | null>(null);

  useEffect(() => {
    const getStats = async () => {
      const data = await fetchStats();
      setStats(data);
    };

    getStats();
  }, []);

  if (!stats) {
    return <div>Loading stats...</div>;
  }

  return (
    <div>
      <h2>Crypto Statistics</h2>
      <p>Total Coins: {stats.totalCoins}</p>
      <p>Total Market Cap: ${stats.totalMarketCap}</p>
      <p>24h Volume: ${stats.total24hVolume}</p>
      <p>BTC Dominance: {stats.btcDominance.toFixed(2)}%</p>
      <h3>Best Coins</h3>
      <ul>
        {stats.bestCoins.map((coin) => (
          <li key={coin.uuid}>
            <img src={coin.iconUrl} alt={coin.name} width="24" /> {coin.name} (
            {coin.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsDashboard;
