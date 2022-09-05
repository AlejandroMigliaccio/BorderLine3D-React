import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const DetalItemCont = () => {
    const [details, setDetails] = useState([])
    const URL = "/server/db.json/products";

    const getdata = () => {
        fetch(URL)
            .then((res) => {
                return res.json()
            })
            .then(data => setDetails(data.products))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        setTimeout(() => {
            getdata();

        }, 2000)
    }, [])
    console.log(details)
    return (
        <div>
            {
                details.map((detail) => (
                    <ItemDetail
                        key={detail.id}
                        title={detail.title}
                        description={detail.description}
                        color={detail.color}
                    />
                ))
            }
        </div>
    );
}

export default DetalItemCont