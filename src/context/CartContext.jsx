import React from 'react'
import { createContext,useContext } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({children}) => {

const[cartItems,setCartItems] = useState([]);

const addToCart = (product) => {

    const exits = cartItems.find((item) => item.id === product.id)

    if (exits){
        toast.info("Item is already in your bag")
        
    }else{
       setCartItems((prev)=>[...prev,product]) 
      toast.success("Item is added in your bag Successfully")  
    }
}

const cartCount = cartItems.length;

return(
    <CartContext.Provider value={{cartCount,addToCart,cartItems,setCartItems}}>
        {children}    
    </CartContext.Provider>
)


}

export const useCart = () => useContext(CartContext);
