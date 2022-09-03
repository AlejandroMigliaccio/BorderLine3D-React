const ItemCard = ({producto}) =>{
     return(
    <div>
        <h1>{producto.name}</h1>
        <img src={producto.image} alt={producto.name}/>
        </div>
     )
}

export default ItemCard;