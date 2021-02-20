import axios from "axios";
import React, { Component, useState, useEffect } from "react";

const CList = ()=> {
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        const fetchItems = async () => {
			const result = await axios(`https://api.coingecko.com/api/v3/coins/list`);
			setItems(result.data);
		};
		fetchItems();
      }, []);
    
    return(
        <section>
            
            { items.map((item) => (
                <h1>{item.name}</h1>
            ))}
        </section>
    );


}
export default CList;