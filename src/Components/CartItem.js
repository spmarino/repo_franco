import React from "react";

const CartItem = ({producto,deleteOneItem}) => {
    return (
        <div id="CartItem">
            <img src={producto.producto.imagen}/>
            <h1>{producto.producto.titulo}</h1>
            <p>Cantidad: {producto.cantidad}</p>
            <p> $ {producto.producto.precio}</p>
            <button onClick={()=> deleteOneItem(producto.id)}>Delete</button>
        </div>
    )
}

export default CartItem;