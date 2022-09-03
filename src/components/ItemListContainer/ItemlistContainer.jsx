import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const URL2="../../server/db/products"
    const URL = "https://rickandmortyapi.com/api/character/?status=alive";
  
    const getdata = () => {
        fetch(URL)
            .then((res) =>{
                return res.json()
            })
            .then(data=> setProductos(data))
            .catch(error=>console.error(error))
    }
  
    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            {
                productos.map((producto) => (
                    <ItemCard data={producto} key={producto.id} ></ItemCard>
                ))
            }
        </>
    )
}

export default ItemListContainer;