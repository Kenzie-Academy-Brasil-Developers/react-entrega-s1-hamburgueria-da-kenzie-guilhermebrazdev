import Product from "../Product";
import "./menu.css";

function MenuContainer({ produto, addShop }) {
  return (
    <div id="cardapio">
      {produto.map((element, index) => {
        return <Product key={index} receber={element} addShop={addShop} />;
      })}
    </div>
  );
}

export default MenuContainer;
