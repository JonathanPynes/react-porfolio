import { useState, useEffect, useCallback } from "react";
import { useInterval } from "../UsefulUtils/useInterval";
// I am a fan of keeping this away from the comp that could be in other places

const options = {
  method: "GET",
};

const useFetchBitcoin = (url) => {
  const [bitcoin, setBitcoin] = useState("");
  const [error, setError] = useState(null);

  const getDataAPI = useCallback(async () => {
    fetch(url, options)
    .then((response) => response.json())
    .then((response) => setBitcoin(response))
    .catch((err) => setError(err));
  },[url]) 
  useEffect(()=>{
    getDataAPI()
  },[getDataAPI])

  useInterval(getDataAPI, 1728000)

  console.log('bitcoin', bitcoin)

  return {
    bitcoin: bitcoin,
    price: bitcoin?.bitcoin?.usd,
    percentChange24hr: bitcoin?.bitcoin?.usd_24h_change,
    marketCap: bitcoin?.bitcoin?.usd_market_cap,
  };
};

export default useFetchBitcoin;