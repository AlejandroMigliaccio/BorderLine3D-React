import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = ({ productos }) => {

    return (
        <>
            {
                productos.map((producto) => (
                    <ItemCard data={producto}  ></ItemCard>
                ))
            }
        </>
    )
}

export default ItemListContainer;