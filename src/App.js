import './App.css';
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= { <ItemListContainer greeting="Mi Tienda" /> } />
          <Route path="/detalle/:id" element= { <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
