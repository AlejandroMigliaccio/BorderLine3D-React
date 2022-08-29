import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter/ButtonCounter';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  const stock=5;
  return (
    <div>
      <Header/>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ButtonCounter stock={stock} initial={1}></ButtonCounter>
    </div>
  );
}

export default App;
