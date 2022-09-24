import './style.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { getTotalProds } = useContext(CartContext);
    return (
        <>
            <Link to="/" className='button'>Inicio</Link>
            <Link to="/productos" className='button'>Productos</Link>
            <Link to="/cart" className='button__cart'>
                <img src='/images/cart.svg'></img>
                <div className='count'>{getTotalProds()}</div>
            </Link>
        </>
    )
}

export default Navbar;