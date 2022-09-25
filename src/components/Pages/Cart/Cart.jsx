import "./style.scss";
import CartItemContainer from "./CartItemContainer/CartItemContainer";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const Cart = () => {
    const { prodctCartList, clear, getTotalPrice } = useContext(CartContext);


    const confirmacionPago = (id) => {
        Swal.fire(
            'Un Exito!',
            `su orden de pago es: ${id}`,
            'success'
        )
    }

    const sendOrder = (e) => {
        e.preventDefault();
        const order = {
            client: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: prodctCartList,
            total: getTotalPrice()
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(res => confirmacionPago(res.id));

    }



    return (
        <div className="cart-header">
            {
                prodctCartList.length > 0 ?
                    <>
                        <h1 className="cart-header__title">Tu Carrito</h1>
                        
                        <div className="cart-header__button">
                            <button className="cart-header__button__clean" onClick={() => clear()}>Limpiar</button>
                            <div className="form">
                                <form onSubmit={sendOrder} className="form__frame">
                                    <label>Name</label>
                                    <input type="text" required>
                                    </input>
                                    <label>phone</label>
                                    <input type="text" required>
                                    </input>
                                    <label>mail</label>
                                    <input type="email" required>
                                    </input>
                                </form>
                            </div>
                            <button type="submit" className="cart-header__button__buy"> pagar</button>
                        </div>
                        <CartItemContainer></CartItemContainer>
                        <h2>Total Final: {getTotalPrice()}</h2>
                    </>
                    :
                    <h2>No tenes productos en el carrito :´(</h2>
            }
        </div >
    )
}

export default Cart;