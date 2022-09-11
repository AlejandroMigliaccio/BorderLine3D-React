
import "./style.scss";
import { NavLink } from "react-router-dom";

const ItemCard = ({ title, price, description, image, id}) => {
    return (
        <div className="product-card">
            <div className="product-card__title">
                <img alt={title} src={image} />
                <h2>{title}</h2>
            </div>
            <div className="product-card__details">
                <h3 className="product-card__details__price"> ${price}</h3>
                <p className='product-card__details__description'>{description}</p>
            </div>
            <NavLink to={`/item/${id}`} className={({isActive})=>isActive?"product-card__link":"product-card__link" }>
                <button className='product-card__button'>Ver Detalle</button>
            </NavLink>
        </div>
    )
}

export default ItemCard;