import './App.css';
import NavBar from "./components/NavBar"
import Item from "./components/Item/Item.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Item />
    </div>
  );
}

export default App;
