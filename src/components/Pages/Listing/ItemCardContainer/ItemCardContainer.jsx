
import "./style.scss";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { useParams } from 'react-router-dom';
import { db } from "../../../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemCardContainer = () => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);


    const cambiarEstado = () => {
    
    }

    const getData = async () => {
        const queryRef = !categoryId ? collection(db, "products") : query(collection(db, "products"), where("categoria", "==", categoryId));
        const response = await getDocs(queryRef);
        const productos = response.docs.map(doc => {
            const products = {
                ...doc.data(),
                id: doc.id
            }
            return products
        });
        setProductos(productos);
    }

    useEffect(() => {
        cambiarEstado();
        getData();
    }, [categoryId])

    return (

        <div className="product-list">
            {

                productos.map((producto) => (

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