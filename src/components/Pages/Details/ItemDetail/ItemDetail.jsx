import "./style.scss";
const ItemDetail = ({ title, description, image, price }) => {
    return (
        <>
            <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <h4 className="itemDetail__price">${price}</h4>
                <h6 className="itemDetail__description">{description}</h6>
                <button className="itemDetail__button">Agregar</button>
            </div>
            <img src={image} alt={title} className="topimage"/>

        </>
    )
}

export default ItemDetail;