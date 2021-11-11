import "./carrinho.css";

function Carrinho({ onShop, removeAll, removeItem }) {
  return (
    <div id="cartBox">
      <div id="carrinho">
        <div id="titleCart">
          <h4>Carrinho de compras</h4>
        </div>
        <ul>
          {onShop.map((element, index) => (
            <li key={index} id="itemList">
              <img src={element.img} />

              <div id="descricao">
                <h3>{element.name}</h3>
                <p>{element.category}</p>
              </div>
              <button id="removerBotao" onClick={() => removeItem(element.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        {onShop.length === 0 ? (
          <div>
            <h1>Sua sacola está vazia</h1>
            <p>Adicione itens</p>
          </div>
        ) : (
          <div>
            <div id="price">
              <p id="total">Total</p>
              <p>
                R$
                {onShop
                  .reduce(
                    (acc, currentValue) => acc + Number(currentValue.price),
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>

            <button id="removeAllBotao" onClick={() => removeAll([])}>
              Remover todos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
