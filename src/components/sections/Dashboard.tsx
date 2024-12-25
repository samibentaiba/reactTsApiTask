import { useEffect, useState } from "react";
import { fetchCryptos, CryptoType } from "../services/ApiService.ts";
import CryptoList from "../cards/CryptoList.tsx";
function Dashboard() {
  const [cryptos, setCryptos] = useState<CryptoType[]>([]);
  useEffect(() => {
    const getCryptos = async () => {
      const data = await fetchCryptos();
      setCryptos(data as CryptoType[]);
    };
    getCryptos();
  }, []);
  return (
    <div style={{ padding: " 1rem" }}>
      <h2>Top CryptoCurrencies</h2>
      <CryptoList cryptosProp={cryptos} />
    </div>
  );
}
export default Dashboard;
