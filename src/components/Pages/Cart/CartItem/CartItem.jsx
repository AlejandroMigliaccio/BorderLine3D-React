import "./style.scss";
import { CartContext } from "../../../../context/CartContext";
import React, { useContext } from "react";

const CartItem = () => {
    const { prodctCartList, removeItem } = useContext(CartContext);

    return (
        <>
            {prodctCartList.map(item => (
                <div className="item">
                    <h2 className="item__title">{item.title}</h2>
                    <p className="item__price">{item.price} X {item.quantity}</p>
                    <img src="/images/cancel_close_cross_delete_remove_icon.svg" alt="close" onClick={() => removeItem(item.title)} />
                </div>
            ))}
        </>

    )
}

export default CartItem;