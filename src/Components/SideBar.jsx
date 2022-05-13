import React, { useState, useEffect, useRef } from "react";
import useFetchBitcoin from "../API/useFetchBitcoin";
import styled from "styled-components/macro";
import { useInterval } from "../UsefulUtils/useInterval";

export default function SideBarContent() {
const [url, setUrl]= useState('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true')
const {price, percentChange24hr, description, marketCap} = useFetchBitcoin(url)


  return (
    <SideBarCSS>
    <h2>Bitcoin</h2>
    <h4>$1 = ₿ {(1/price)?.toFixed(6)}</h4>
    <h4>24hr Change: {percentChange24hr?.toFixed(2)}%</h4>
    <h4>MarketCap: ${Number(marketCap)?.toLocaleString()}</h4>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    </SideBarCSS>
  );
}

const SideBarCSS = styled.div`
margin: 1rem;
`