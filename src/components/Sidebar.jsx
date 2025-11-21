import React from 'react'
import "./Sidebar.css";
import { useState } from 'react';

const Sidebar = ({onPriceChange}) => {

  const[selectedPrice,setSelectedPrice] = useState([]);
  
  const PriceChange = (range) => {
    const updated = selectedPrice.includes(range)
    ? selectedPrice.filter((r)=> r !== range) 
    : [...selectedPrice,range];

    setSelectedPrice(updated);
    onPriceChange(updated);
  }

  return (
    <div className="sidebar">
        <h3>Filter By Price</h3>

        <label><input type="checkbox"
        onChange={()=>PriceChange("under500")}
        checked={selectedPrice.includes("under500")} 
         />&nbsp;&nbsp;
        Under Rs.500
        </label>

        <label><input type="checkbox"
        onChange={()=>PriceChange("501to700")}
        checked={selectedPrice.includes("501to700")}  
        />&nbsp;&nbsp;
        Rs.501-Rs.700
        </label>

        <label><input type="checkbox"
        onChange={()=>PriceChange("701to1000")}        
        checked={selectedPrice.includes("701to1000")} 
        />&nbsp;&nbsp;
        Rs.701-Rs.1,000
        </label>

        <label><input type="checkbox" 
        onChange={()=>PriceChange("1001to2000")}
        checked={selectedPrice.includes("1001to2000")} 
        />&nbsp;&nbsp;
        Rs.1,001-Rs.2000
        </label>

        <label><input type="checkbox" 
        onChange={()=>PriceChange("above2000")}
        checked={selectedPrice.includes("above2000")} 
        />&nbsp;&nbsp;
        Above Rs.2,000
        </label>     
    </div>
  )
}

export default Sidebar
