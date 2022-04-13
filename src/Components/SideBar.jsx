import React, { useState, useEffect, useRef } from "react";
import useFetchBitcoin from "./useFetchBitcoin";
import styled from "styled-components/macro";
import { useInterval } from "./useInterval";

export default function SideBarContent() {
const [url, setUrl]= useState('https://cryptocurrency-markets.p.rapidapi.com/coin/quote?key=bitcoin')
const {price, percentChange24hr, bitcoin} = useFetchBitcoin(url)

  return (
    <>
    <h3>Bitcoin Price: ${price?.toFixed(2)}</h3>
    <h4>24hr %: {percentChange24hr?.toFixed(2)}%</h4>
    </>
  );
}
