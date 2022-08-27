import './style/style.scss';
import image from "../../public/cart.svg";

const Cart = () => {
    return (
        <div className="cart">
            <img src={image} alt="cart" />
            <p className='cart__count'>0</p>
        </div>
    )
}

export default Cart;