import "./style.scss";
import { NavLink } from "react-router-dom";

const CatNav = () => {
    return (
        <div className="catNav">
            <NavLink to="/productos" className={({ isActive }) => isActive ? "link" : "link"}>
                Todo
            </NavLink>
            <NavLink to="/productos/oficina" className={({ isActive }) => isActive ? "link" : "link"}>
                Oficina
            </NavLink>
            <NavLink to="/productos/decoracion" className={({ isActive }) => isActive ? "link" : "link"}>
                Decoracion
            </NavLink>
            <NavLink to="/productos/juguete" className={({ isActive }) => isActive ? "link" : "link"}>
                Jueguete
            </NavLink>

        </div>
    )
}

export default CatNav;