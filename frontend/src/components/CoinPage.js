import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import "./CoinPage.css";

const CoinPage = ({coin}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        const fetchItems = async () => {
			const result = await axios(`https://api.coingecko.com/api/v3/coins/${coin}`);
			setItems(result.data);
		};
		fetchItems();
        const script = document.createElement('script');
  
        script.src = "https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js";
        script.async = true;
        const script2 = document.createElement('script');
        script2.src = "https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js";
        script2.async = true;

        document.body.appendChild(script);
        document.body.appendChild(script2);
        return () => {
        document.body.removeChild(script);
        document.body.removeChild(script2);
        }
      }, []);
      
      return (
        
        <section >
            <h1>{items.name}</h1>
            <h2>Coin Id: {items.id}</h2>
            <div class = "one">
<          coingecko-coin-market-ticker-list-widget  coin-id={coin} currency="usd" locale="en" background-color="#000000"></coingecko-coin-market-ticker-list-widget>
            </div>
            <div class = "two">
            <coingecko-coin-price-chart-widget  coin-id={coin} currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
            </div>
        </section>
      );


}
export default CoinPage;