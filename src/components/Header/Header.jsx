import './style.scss';
import Navbar from '../Navbar/Navbar';
import {Link} from "react-router-dom";
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