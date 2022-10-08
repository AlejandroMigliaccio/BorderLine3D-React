import React, { useState } from "react";
import Swal from 'sweetalert2';

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
            newList[prodPos].quantityPrice = newList[prodPos].quantity * newList[prodPos].price;
            setProductCartList(newList);
            confirmado();
        } else {
            const newList = [...prodctCartList];
            newProd.quantityPrice = newProd.quantity * newProd.price;
            newList.push(newProd);
            setProductCartList(newList);
            confirmado();
        }
    }

    const removeItem = (itemId) => {

        const newList = prodctCartList.filter(p => p.title !== itemId);
        setProductCartList(newList);
        alerta();
    }

    const clear = () => {
        if (prodctCartList.length > 0) {
            setProductCartList([]);
            alertaListClear();
        } else {
            alertaListVacia();
        }
    }

    const isInCart = (prodTitle) => {
        const prodExist = prodctCartList.some(item => item.title === prodTitle);
        return prodExist;

    }

    const getTotalPrice = () => {
        const totalPrice = prodctCartList.reduce((acc, item) => acc + item.quantityPrice, 0);
        return totalPrice;
    }

    const getTotalProds= ()=>{
        const totalProd = prodctCartList.reduce((acc, item) => acc + item.quantity, 0);
        return totalProd;
    }

    const alerta = () => {

        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'El item se eliminó',
        })
    }

    const alertaListClear = () => {

        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Se vacio su lista',
        })
    }

    const alertaListVacia = () => {

        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'No tiene una lista para vaciar',
        })
    }

    const confirmado = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto se ha añadido a su carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    

    return (
        <CartContext.Provider value={{ prodctCartList, addItem, removeItem, clear, getTotalPrice, getTotalProds }}>
            {children}
        </CartContext.Provider>
    )
}

