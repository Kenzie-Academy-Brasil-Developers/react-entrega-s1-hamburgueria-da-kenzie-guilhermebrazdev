import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Carrinho from "./components/Carrinho/index";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: "14.00",
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: "16.00",
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: "18.00",
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: "5.00",
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: "4.99",
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: "4.99",
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [pesq, setPesq] = useState("");

  function showProducts(search) {
    const searchResult = products.filter((element) =>
      element.name.toLowerCase().includes(search)
    );
    setFilteredProducts(searchResult);
  }

  function handleClick(productId) {
    const addShop = products.find((element) => {
      return element.id === productId;
    });

    if (currentSale.includes(addShop)) {
      return;
    } else {
      setCurrentSale([...currentSale, addShop]);
    }
  }

  function removeItem(productId) {
    const remove = currentSale.filter((element) => productId !== element.id);

    setCurrentSale(remove);
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav id="navegacao">
          <div id="titleBox">
            <h1>Burguer</h1> <p>Kenzie</p>
          </div>

          <div id="pesquisa">
            <input
              id="inputPesquisa"
              type="text"
              onChange={(evt) => setPesq(evt.target.value)}
              placeholder="Digitar Pesquisa"
            ></input>
            <button onClick={() => showProducts(pesq)}>Pesquisar</button>
          </div>
        </nav>
        <div id="mainBox">
          <div id="showFood">
            {filteredProducts.length > 0 ? (
              <MenuContainer produto={filteredProducts} addShop={handleClick} />
            ) : (
              <MenuContainer produto={products} addShop={handleClick} />
            )}
          </div>

          <Carrinho
            onShop={currentSale}
            removeAll={setCurrentSale}
            removeItem={removeItem}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
