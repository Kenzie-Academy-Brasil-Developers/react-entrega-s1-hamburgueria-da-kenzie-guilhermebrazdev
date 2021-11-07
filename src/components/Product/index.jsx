import "./card.css";

function Product({ receber, addShop }) {
  return (
    <div id="cardBox">
      <div id="imgBox">
        <img src={receber.img} alt="Img-comida" id="imagem"></img>
      </div>

      <div id="nomeProduto">
        <h1>{receber.name}</h1>
      </div>

      <div id="categoria">
        <p>{receber.category}</p>
      </div>

      <div id="price">
        <p> R$ {receber.price} </p>
      </div>

      <button id="botao" onClick={() => addShop(receber.id)}>
        Adicionar
      </button>
    </div>
  );
}

export default Product;
