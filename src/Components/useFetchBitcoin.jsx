// import React, { useState, useEffect, useRef } from "react";

// const useFetchBitcoin = (url) => {
// const [bitcoin, setBitcoin] = useState("")
// const [update, setUpdate] = useState([])
// //error state
// //interval 
// const UpdateAPI = () => {
//   setInterval(function() {
//     if (update === ["update"]) {
//       setUpdate([])
//     }
//     if (update === [])
//     setUpdate(["update"])
//   }, 8000)
// }
//   useEffect(()=> {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'cryptocurrency-markets.p.rapidapi.com',
//       'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`
//     }
//   }; 
//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => setBitcoin(response))
//     .then(UpdateAPI())
//     .catch(err => console.error(err));
// }, [update]);
// //add push to a time keeper
// return {
//   bitcoin: bitcoin,
//   price: bitcoin?.result?.price,
//   percentChange24hr: bitcoin?.result?.priceChangePercentage24h,
//   }
// }

// export default useFetchBitcoin;

// (function loop(){
//   setTimeout(function() {
//      // Your logic here

//      loop();
//  }, delay);
// })();

import { useState, useEffect, useCallback } from "react";
import { useInterval } from "./useInterval";
// I am a fan of keeping this away from the comp that could be in other places

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "cryptocurrency-markets.p.rapidapi.com",
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`
  }
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


  return {
    bitcoin: bitcoin,
    price: bitcoin?.result?.price,
    percentChange24hr: bitcoin?.result?.priceChangePercentage24h
  };
};

export default useFetchBitcoin;