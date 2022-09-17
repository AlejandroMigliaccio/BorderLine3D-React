import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [prodctCartList, setProductCartList] = useState([]);

    const addItem = (item, image, price, quantity) => {
        
        const newProd = {
            title: item,
            price: price,
            image: image,
            quantity: quantity
        }
        
        if (isInCart(newProd.title)) {
            const prodPos = prodctCartList.findIndex(p => p.title === newProd.title);
            const newList = [...prodctCartList];
            newList[prodPos].quantity = newList[prodPos].quantity + quantity;
            setProductCartList(newList);
        } else {
            const newList = [...prodctCartList];
            newList.push(newProd);
            setProductCartList(newList);
        }

    }

    const removeItem = (itemId) => {
        const newList = prodctCartList.filter(p => p.title !== itemId);
        setProductCartList(newList);
    }

    const clear = () => {
        const newList = [];
        setProductCartList(newList);
    }

    const isInCart = (prodTitle) => {
        const prodExist = prodctCartList.some(item => item.title === prodTitle);
        return prodExist;

    }



    return (
        <CartContext.Provider value={{ prodctCartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

