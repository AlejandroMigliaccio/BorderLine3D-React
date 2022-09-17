import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Listing from './components/Pages/Listing/Listing';
import Footer from './components/Footer/Footer';
import Cart from './components/Pages/Cart/Cart';
import Details from './components/Pages/Details/Details';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='app'>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/productos" element={<Listing></Listing>} />
            <Route path="/productos/:categoryId" element={<Listing></Listing>} />
            <Route path="/item/:productId" element={<Details></Details>} />
            <Route path="/cart" element={<Cart></Cart>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
