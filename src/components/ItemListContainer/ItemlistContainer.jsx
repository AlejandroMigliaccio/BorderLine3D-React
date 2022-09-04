import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import "./style/style.scss";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const URL2 = "/server/db.json";

    const getdata = () => {
        fetch(URL2)
            .then((res) => {
                return res.json()
            })
            .then(data => setProductos(data.products))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        setTimeout(()=>{
            getdata();

        },2000)
    }, [])

    return (
        <div className="list">
            {
                productos.map((producto) => (
                    <ItemCard
                        key={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        description={producto.description}
                    />
                ))
            }
        </div>
    )
}

export default ItemListContainer;