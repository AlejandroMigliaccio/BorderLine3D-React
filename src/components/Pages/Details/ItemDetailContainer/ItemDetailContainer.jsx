import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./style.scss";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([])
    const [id, setId] = useState([])
    const URL = "/db.json";

    const getdata = () => {
        fetch(URL)
            .then((res) => {
                return res.json()
            })
            .then(data => setProducts(data.products))
            .catch(error => console.error(error))
    }

    const filterId = (a) => {
        const p = a.filter(prod => prod.id === productId);
        setId(p);
    }

    useEffect(() => {
        setTimeout(() => {
            getdata();
            filterId(products)
        },)
    }, [productId,products]);
    
    return (

        <div className="DetailContainer">
            {
                id.map((p) => (
                    <ItemDetail
                        key={p.id}
                        title={p.name}
                        description={p.description}
                        price={p.price}
                        image={p.url}
                    />
                ))
            }
        </div>

    );
}


export default ItemDetailContainer;