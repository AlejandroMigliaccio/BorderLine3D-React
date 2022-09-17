import "./style.scss";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
    const {clear} = useContext(CartContext);
    return (
        <div className="cart-header">
            <h1 className="cart-header__title">Tu Carrito</h1>
            <div className="cart-header__button">
                <button className="cart-header__button__clean" onClick={()=>clear()}>Limpiar</button>
                <a className="cart-header__button__buy" href="./login.html">Pagar</a>
            </div>
        <CartItemContainer></CartItemContainer>
        </div>
    )
}

export default Cart;