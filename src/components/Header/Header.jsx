import './style.scss';
import {Link} from "react-router-dom";
import Navbar from '../NavBar/NavBar';
const Header = () => {
    return (
        <div>
            <header className="header">
                <Link to="/" className="header__anc">
                    <img src="/images/borderlogo.png" alt="logo" className="header__logo" />
                </Link>
                <Navbar></Navbar>
            </header>
        </div >
    );
}

export default Header;