import './style/style.scss';


const Cart = () => {
    return (
        <div className="cart">
            <img src="/cart.svg" alt="cart" />
            <p className='cart__count'>0</p>
        </div>
    )
}

export default Cart;