import { CryptoType } from "../services/ApiService";
import React from "react";
type CryptoCardPropType = {
  cryptoProp: CryptoType;
};
const CryptoCard: React.FC<CryptoCardPropType> = ({ cryptoProp }) => {
  return (
    <div style={{ border: " 1px solid #ddd", padding: "1rem", width: "200px" }}>
      <img
        src={cryptoProp.iconUrl}
        alt={cryptoProp.name}
        style={{ width: "50px" }}
      />
      <h3>{cryptoProp.name}</h3>
      <p>`Price : ${parseFloat(cryptoProp.price).toFixed(2)}`</p>
      <p>`Market Cap: ${parseFloat(cryptoProp.marketCap).toLocaleString()}`</p>
    </div>
  );
};

export default CryptoCard;
