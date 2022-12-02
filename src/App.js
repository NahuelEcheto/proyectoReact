import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';
import ErrorRuta from './components/404/ErrorRuta';
import Footer from "./components/Footer/Footer.jsx";
import {CartContextProvider} from './storage/CartContext';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartView from './components/CartView/CartView';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= { <ItemListContainer greeting="Mi Tienda" /> } />
          <Route path="/category/:category" element= { <ItemListContainer /> } />
          <Route path="/detalle/:id" element= { <ItemDetailContainer /> } />
          <Route path="/cart" element={ <CartView /> }  />
          <Route path="/checkout/:orderid" element={ <CheckOut /> } />
          <Route path="*" element={ <ErrorRuta /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
