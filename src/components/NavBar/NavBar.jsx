import './style.scss';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Link to="/" className='button'>Inicio</Link>
            <Link to="/productos" className='button'>Productos</Link>
            <Link to="/cart" className='button__cart'>
                <img src='/images/cart.svg'></img>
                <div className='count'>2</div>
            </Link>
        </>
    )
}

export default Navbar;