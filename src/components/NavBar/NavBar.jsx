import './style/style.scss';
import Cart from '../Cart/Cart';
const NavBar = () => {
    return (
        <div className="navBar">
        <div className='navBar__sections'>
            <a>
                Home
            </a>
            <a>
                Products
            </a>
            <a>
                Contact
            </a>
        </div>
        <div className='navBar__cart'>
            <Cart></Cart>
        </div>
        </div>
    )
}

export default NavBar;