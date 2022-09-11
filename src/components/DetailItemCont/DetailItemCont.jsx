import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const DetalItemCont = () => {

    const [details, setDetails] = useState([])
    const [product, setProduct] = useState([])
    const URL = "/server/db.json";

    const getdata = () => {
        fetch(URL)
            .then((res) => {
                return res.json()
            })
            .then(data => setDetails(data.products))
            .catch(error => console.error(error))
    }
  
    const getproduct = (a) => {

        const p = a.filter(prod => prod.id == 1);
        setProduct(p)
    }

    useEffect(() => {
        setTimeout(() => {
            getdata();
            getproduct(details);
        }, 2000)
    }, [])



    return (
        <div>
            {
                product.map((p) => (
                    console.log(p),
                    <ItemDetail
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        price={p.price}
                        stock={p.stock}
                        image={p.image}
                    />
                ))
            }
        </div>
    );
}

export default DetalItemCont