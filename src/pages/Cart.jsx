import React from 'react'
import { useCart } from '../context/CartContext'
import "./Cart.css";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import ConfirmModel from '../components/ConfirmModel';


const Cart = () => {
    const{cartItems,setCartItems} = useCart();
    const [itemToRemove,setItemToRemove] = useState();
    const [orderPlaced,setOrderPlaced] = useState(false);

    const decreadesdQuantity = (ID) =>{
        setCartItems((prev)=>(
            prev.map((item)=>(
                item.id === ID && item.count>1? 
                {...item, count:item.count-1} : item
            ))
        ))
    }

    const increasedQuantity = (ID) =>{
        setCartItems((prev)=>(
            prev.map((item)=>(
               item.id === ID ? 
               {...item,count:item.count+1} : item 
            ))
        ))
    }

    const totalQuantity = cartItems.reduce((totalCount,item)=>totalCount+item.count,0);

    

    const totalPrice = cartItems.reduce((totalPrice,item)=>totalPrice+(item.price*item.count),0)
        
    
    const totalDiscount = totalPrice * 0.3
        
    
    const totalFinialPrice = totalPrice * totalQuantity
        
    const handleRemoveClick = (ID)=>{
        setItemToRemove(ID);
    }

    const confirmRemove = () =>{
        const updatedCart = cartItems.filter((item)=> item.id !== itemToRemove)
        setCartItems(updatedCart);
        setItemToRemove(null);
    } 

    const confirmCancel = () =>{
        setItemToRemove(null);
    }

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        setCartItems([]);
        setTimeout(()=>setOrderPlaced(false),3000);
    }




  return (
    <div className="cart-container">
        <div className="cart-item-details">
            {
                cartItems.length === 0 ? (
                    <h2>Your Cart is Empty</h2>
                ):(
                    <>
                    {
                        cartItems.map((item)=>(
                            <div className="cart-item" key={item.id}>
                                <img src={item.img} className="image-cart-container"/>
                                <div className="item-info">
                                    <p>{item.description}</p>
                                    <p>Rs.   {(item.count*item.price).toLocaleString()}/-</p>
                                </div>
                                <div className="quantity-controls">
                                    <button disabled={item.count <=1} onClick={()=>decreadesdQuantity(item.id)}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={()=>increasedQuantity(item.id)}>+</button>
                                </div>
                                <RxCross2 onClick={()=>handleRemoveClick(item.id)} className="cross-icon"/>                            
                            
                            </div>
                        ))
                    }
                    { itemToRemove && (
                    <ConfirmModel 
                    message="Are You Sure You Want To Delete this item"
                    onConfirm={confirmRemove}
                    onCancel={confirmCancel}
                    />
                )}     

                    </>
                )
            }
        </div>

        <div className="cart-summary">
            <h3>Price Details</h3>

            <p style={{display:"flex", justifyContent:"space-between",marginTop:"2rem"}}>
            <strong>Total Quantity :</strong>
            <span>{totalQuantity}</span>

            </p>
            <p style={{display:"flex", justifyContent:"space-between",marginTop:"2rem"}}>
            <strong>Total Price :</strong>
            <span>Rs. {totalPrice.toLocaleString()}/-</span> 
            </p>

            <p style={{display:"flex", justifyContent:"space-between",marginTop:"2rem"}}>
            <strong>Discount On MRP(30%) :</strong>
            <span>Rs. {totalDiscount.toLocaleString()}/-</span>
            </p>

            <p style={{display:"flex", justifyContent:"space-between",marginTop:"2rem"}}>
             <strong>Total Final Price :</strong>
            <span>Rs. {totalFinialPrice.toLocaleString()}/-</span>
            </p>

            <button className="place-order-btn" disabled={cartItems.length === 0}
            onClick={handlePlaceOrder}            >
            PLACE YOUR ORDER</button>
        </div>

                {
            
            orderPlaced && (
                <div className="order-overlay">
                <p className="order-success">
                 🎉 Your Order has been successfully placed.
                </p>
                </div>
            )
             }

      
    </div>


  )
}

export default Cart
