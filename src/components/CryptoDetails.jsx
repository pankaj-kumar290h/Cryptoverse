import React from "react";

import { useParams } from "react-router-dom";
function CryptoDetails() {
  const prams = useParams();
  console.log(prams.coinId);
  return <div>CryptoDetails</div>;
}

export default CryptoDetails;
