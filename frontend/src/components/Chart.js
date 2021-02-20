import axios from "axios";
import React, { Component, useState, useEffect } from "react";

const Chart = () => {
useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

   return(
       <div>
<coingecko-coin-price-chart-widget  coin-id="bitcoin" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
<coingecko-coin-price-chart-widget  coin-id="ethereum" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
<coingecko-coin-price-chart-widget  coin-id="litecoin" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
<coingecko-coin-price-chart-widget  coin-id="cardano" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>

</div>
    );

}
export default Chart;