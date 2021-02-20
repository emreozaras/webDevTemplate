import axios from "axios";
import React, { Component, useState, useEffect } from "react";

const CoinPage = ({coin}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        const fetchItems = async () => {
			const result = await axios(`https://api.coingecko.com/api/v3/coins/${coin}`);
			setItems(result.data);
		};
		fetchItems();
      }, []);
      


}
export default CoinPage;