import "./style.scss";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
    const { prodctCartList, clear, getTotalPrice } = useContext(CartContext);
   
    return (
        <div className="cart-header">
            {
                prodctCartList.length > 0 ?
                    <>
                        <h1 className="cart-header__title">Tu Carrito</h1>
                        <div className="cart-header__button">
                            <button className="cart-header__button__clean" onClick={() => clear()}>Limpiar</button>
                            <a className="cart-header__button__buy" href="./login.html">Pagar</a>
                        </div>
                        <CartItemContainer></CartItemContainer>
                        <h2>Total Final: {getTotalPrice()}</h2>
                    </>
                    :
                    <h2>No tenes productos en el carrito :´(</h2>
        }
        </div>
    )
}

export default Cart;