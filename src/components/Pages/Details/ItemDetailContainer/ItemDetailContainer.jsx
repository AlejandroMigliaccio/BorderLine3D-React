import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../../utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import "./style.scss";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProducts] = useState([]);

    const getData = async () => {
        const queryRef = doc(db, "products", productId)
        const response = await getDoc(queryRef);
        const details = {
            ...response.data(),
            id: response.id
        }
        setProducts(details);
    }

    useEffect(() => {
        setTimeout(() => {
            getData();
        },)
    }, [productId]);

    return (

        <div className="DetailContainer">
            {

                <ItemDetail
                    key={product.id}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.url}
                />

            }
        </div>

    );
}


export default ItemDetailContainer;