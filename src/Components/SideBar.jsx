import React, { useState, useEffect, useRef } from "react";
import useFetchBitcoin from "./useFetchBitcoin";
import styled from "styled-components/macro";

export default function SideBarContent() {

const {price, percentChange24hr, bitcoin} = useFetchBitcoin('https://cryptocurrency-markets.p.rapidapi.com/coin/quote?key=bitcoin')
console.log({price, percentChange24hr, bitcoin})

  return (
    <>
    <h3>Bitcoin Price: ${price?.toFixed(2)}</h3>
    <h4>24hr %: {percentChange24hr?.toFixed(2)}%</h4>
    </>
  );
}
