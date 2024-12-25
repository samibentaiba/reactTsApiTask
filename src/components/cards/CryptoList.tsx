import CryptoCard from "./CryptoCard";
import { CryptoType } from "../services/ApiService.ts";
import React from "react";
interface CryptoListPropType {
  cryptosProp: CryptoType[];
}
const CryptoList: React.FC<CryptoListPropType> = ({ cryptosProp }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {cryptosProp.map((crypto: CryptoType) => (
        <CryptoCard key={crypto.uuid} cryptoProp={crypto} />
      ))}
    </div>
  );
};

export default CryptoList;
