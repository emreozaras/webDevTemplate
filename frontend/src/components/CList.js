import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import "./CList.css";

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
                <div>
                    <a class = "anc" href= {"/coins/"+item.id}>{item.name}</a>
                </div>
                

            ))}
        </section>
    );


}
export default CList;