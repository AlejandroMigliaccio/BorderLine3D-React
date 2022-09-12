
import "./style.scss";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { useParams } from 'react-router-dom';


const ItemCardContainer = () => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [categoria, setCategory] = useState([]);
    const URL2 = "/db.json";

    const getdata = () => {
        fetch(URL2)
            .then((res) => {
                return res.json()
            })
            .then(data => setProductos(data.products))
            .catch(error => console.error(error))
    }
    
    const filterCat = (a) => {
        if(categoryId){
            const p = a.filter(prod => prod.categoria === categoryId);
            setCategory(p);
        }else{
            setCategory(a);
        }

    }

    useEffect(() => {
        setTimeout(() => {
            getdata();
            filterCat(productos);
        }, )
    }, [categoryId,productos])

    return (

        <div className="product-list">
            {
                categoria.map((producto) => (

                    <ItemCard
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.url}
                        description={producto.description}
                    />
                ))
            }
        </div>

    )
}

export default ItemCardContainer;