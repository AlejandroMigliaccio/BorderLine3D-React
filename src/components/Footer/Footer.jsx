import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <ul className="footer__content__list">
                    <li>
                        <a
                            href="https://www.tiendaprintalot.com.ar/?mshops-cookie-isguest=false&mshops-redirection-timestamp=1657898538653&mshops-cookie-cp=1838">Proveerdores</a>
                    </li>
                    <li>
                        <a href="./listing.html">Comprar</a>
                    </li>
                </ul>
                <div className="footer__content__media">
                    <a href="https://www.instagram.com/borderline_3d/">
                        <img src="/images/instagram.svg" alt="instagram"/>
                    </a>
                </div>
            </div>
            <div className="footer__legal">
                ©2022 BorderLine 3D, todos los derechos reservados
            </div>
        </footer>
    );
}

export default Footer;