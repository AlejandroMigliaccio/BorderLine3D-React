import DetalItemCont from './components/DetailItemCont/DetailItemCont';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import NavBar from './components/NavBar/NavBar';
function App() {

  return (
    <div>
      <Header/>
      <NavBar></NavBar>
      {/* <ItemListContainer></ItemListContainer> */}
      <DetalItemCont></DetalItemCont>
    </div>
  );
}

export default App;
