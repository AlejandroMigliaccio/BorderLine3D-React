import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
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
    <div>
      <Header/>
      <NavBar></NavBar>
      <ItemListContainer data={productos}></ItemListContainer>
    </div>
  );
}

export default App;
