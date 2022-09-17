import { useState, useContext } from "react";
import ItemCounter from "../../../ItemCount/ItemCount";
import "./style.scss";
import { CartContext } from "../../../../context/CartContext";

const ItemDetail = ({ title, description, image, price }) => {

    const { addItem } = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato) => {
        setContador(dato);
        addItem(title, image, price, dato);
    }

    return (
        <>
            <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <h4 className="itemDetail__price">${price}</h4>
                <h6 className="itemDetail__description">{description}</h6>
                <ItemCounter stock={10} initial={1} onAdd={onAdd} ></ItemCounter>

            </div>
            <img src={image} alt={title} className="topimage" />
        </>
    )
}

export default ItemDetail;