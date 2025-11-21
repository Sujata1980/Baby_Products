import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../data/Products';
import { FaIndianRupeeSign } from "react-icons/fa6";
import "./ProductDetail.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from '../context/CartContext';



const ProductDetail = () => {

    const{category,id} = useParams();

    const categoryProducts = Products[category] || [];

    const product = categoryProducts.find((item)=> String(item.id) === id)

    const {addToCart} = useCart();

  return (
    <div className="product-detail">
        <img src={product.img} alt="" height={500}/>
        <div className="product-info">
            <h2>{product.description}</h2>
            <h2><FaIndianRupeeSign style={{fontSize:"1rem"}}/>
            {product.price}/-</h2>
            <button className="btn" onClick={()=>addToCart(product)}>
            <IoBagHandleOutline/>    
            
            ADD TO BAG</button>
        </div>      
    </div>
  )
}

export default ProductDetail
