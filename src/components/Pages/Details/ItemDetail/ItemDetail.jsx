import { useState } from "react";
import ItemCounter from "../../../ItemCount/ItemCount";
import "./style.scss";
const ItemDetail = ({ title, description, image, price }) => {

    const [contador,setContador] = useState(0);

    const onAdd = (dato) =>{
        setContador(dato);
    }

    return (
        <>
            <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <h4 className="itemDetail__price">${price}</h4>
                <h6 className="itemDetail__description">{description}</h6>
                <button className="itemDetail__button">Agregar</button>
            </div>
            <img src={image} alt={title} className="topimage"/>
            <ItemCounter stock={10} initial={1} onAdd={onAdd} ></ItemCounter>
        </>
    )
}

export default ItemDetail;