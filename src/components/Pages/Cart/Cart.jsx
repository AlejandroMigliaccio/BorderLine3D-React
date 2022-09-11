import "./style.scss";
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Cart = () => {
    return (
        <div className="cart-header">
            <h1 className="cart-header__title">Tu Carrito</h1>
            <div className="cart-header__button">
                <button className="cart-header__button__clean">Limpiar</button>
                <a className="cart-header__button__buy" href="./login.html">Pagar</a>
            </div>
        <CartItemContainer></CartItemContainer>
        </div>
    )
}

export default Cart;