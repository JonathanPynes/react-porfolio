import React, { useState, useEffect, useRef } from "react";
import useFetchBitcoin from "../API/useFetchBitcoin";
import styled from "styled-components/macro";
import { useInterval } from "../UsefulUtils/useInterval";

export default function SideBarContent() {
const [url, setUrl]= useState('https://cryptocurrency-markets.p.rapidapi.com/coin/quote?key=bitcoin')
const {price, percentChange24hr, bitcoin} = useFetchBitcoin(url)

  return (
    <SideBarCSS>
    <h1>Bitcoin</h1>
    <h3>$1 = ₿ {(1/price)?.toFixed(6)}</h3>
    <h4>24hr Change: {percentChange24hr?.toFixed(2)}%</h4>
    </SideBarCSS>
  );
}

const SideBarCSS = styled.div`
padding: 1rem;
margin: 1rem;
`