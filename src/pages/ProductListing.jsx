import React, { useState } from "react";
import Products from "../data/Products";
import Sidebar from "../components/Sidebar";
import "./ProductListing.css";
import { NavLink, useParams } from "react-router-dom";
import { PiSmileySadLight } from "react-icons/pi";


const ProductListing = ({ showAll = false }) => {
  const { category } = useParams();

  // 🧩 Step 1: Get products based on mode
  let categoryProducts = [];

  if (showAll) {
    // ✅ merge all categories’ products into one big array
    categoryProducts = Object.values(Products).flat();
  } else {
    // ✅ show only selected category
    categoryProducts = Products[category] || [];
  }

  // 🧩 Step 2: Define price range logic
  const priceRanges = {
    
    under500: (price) => price < 500,
    "501to700": (price) => price >= 501 && price <= 700,
    "701to1000": (price) => price >= 701 && price <= 1000,
    "1001to2000": (price) => price >= 1001 && price <= 2000,
    above2000: (price) => price > 2000,
  };

  // 🧩 Step 3: State for selected filters
  const [selectedPrices, setSelectedPrices] = useState([]);

  // 🧩 Step 4: Get filter updates from Sidebar
  const handlePriceChange = (updatedFilters) => {
    setSelectedPrices(updatedFilters);
  };

  // 🧩 Step 5: Apply filtering
  const filteredProducts = categoryProducts.filter((product) =>
    selectedPrices.length === 0
      ? true
      : selectedPrices.some((range) => priceRanges[range](product.price))
  );

  // 🧩 Step 6: Render
  return (
    <div className="product-page">
      {!showAll && <Sidebar onPriceChange={handlePriceChange} />}

      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="card-container" key={item.id}>
              <NavLink to={`/${category || "all"}/${item.id}`}>
                <div className="image-container">
                  <img src={item.img} alt={item.name} />
                </div>
              </NavLink>
              <p>Rs.{item.price}/-</p>
            </div>
          ))
        ) : (
          
          <div className="no-product-found">
            <div>
           <PiSmileySadLight className="sad-smiliey" />
          <p>Sorry..No Products Found Of This Range....</p>
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default ProductListing;
