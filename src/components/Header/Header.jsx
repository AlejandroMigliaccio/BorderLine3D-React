import title from '../../public/title.png';
import logo from '../../public/logo.png';
import './style/style.scss';
const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt='title' className='header__logo' />
            <img src={title} alt='title' className='header__title'/>
        </header>
    )
}

export default Header;