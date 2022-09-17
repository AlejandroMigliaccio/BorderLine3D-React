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
            setProductCartList(newList);
            confirmado();
        } else {
            const newList = [...prodctCartList];
            newList.push(newProd);
            setProductCartList(newList);
            confirmado();
        }

    }

    const removeItem = (itemId) => {
        debugger
        const newList = prodctCartList.filter(p => p.title !== itemId);
        setProductCartList(newList);
        alerta();
    }

    const clear = () => {
        if(prodctCartList<0){
            const newList = [];
            setProductCartList(newList);
            alertaListClear();
        }else{
            alertaListVacia();
        }
    }

    const isInCart = (prodTitle) => {
        const prodExist = prodctCartList.some(item => item.title === prodTitle);
        return prodExist;

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
        <CartContext.Provider value={{ prodctCartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

