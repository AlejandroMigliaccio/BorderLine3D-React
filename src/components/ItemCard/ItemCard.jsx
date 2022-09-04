import "./style/style.scss"
const ItemCard = ({ title, price, description, image }) => {
    return (
        <div className="card">
            <h2 className="card__title">{title}</h2>
            <h3 className="card__price">${price}</h3>
            <img src={image} alt={title} className="card__img"/>
            <p className="card__description">{description}</p>
        </div>
    )
}

export default ItemCard;