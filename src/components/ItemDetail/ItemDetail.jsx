const ItemDetail = ({title, description,image, price}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h6>${price}</h6>
            <img src={image} alt="sg" />
        </div>
    )
}

export default ItemDetail;