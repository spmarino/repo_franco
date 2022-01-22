import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import { useContext, useState } from "react";

const ItemDetail = ({ producto, idProduct }) => {
  const { titulo, precio, descripcion, imagen, id } = producto;

  const { addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(1);

  const articulo = {
    producto: producto,
    id: idProduct,
    cantidad: cant,
  };

  const onAdd = (contador) => {
    setCant(contador);
  };

  return (
    <>
      <div className="itemDetail">
        <div className="divImagenDetail">
          <img className="imagenDetail" src={`/${imagen}`} />
        </div>

        <div className="descripcionDetail">
          <h1>{id}</h1>
          <h2>{titulo}</h2>
          <h4>{descripcion}</h4>
          <p>$ {precio}</p>
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          <button id="botonComprar" onClick={() => addToCart(articulo)}>
            {" "}
            Añadir a carrito{" "}
          </button>
          {console.log(articulo)}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
