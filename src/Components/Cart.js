import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import CartItem from "./CartItem";


const Cart = () => {

    const { cartArray , clearCart , deleteItem } = useContext(CartContext)
    
    
    const clearFullCart = () =>{
        console.log("Borraste todos los productos del carrito")
        clearCart()
    }
    return (
        <div>
            
            {cartArray.length === 0 &&
            <div className="noHayProductos">
                <p>Aún no has seleccionado ningún producto</p>
                <Link className="linkNoHayProductos" to="/">Ir al inicio</Link>
            </div>
            }

            {cartArray.length > 0 && 
            <div>
                <button className="clearButton"  onClick={clearFullCart}>Clear cart</button>
                {cartArray.map(producto => <CartItem key={producto.id} producto={producto} deleteOneItem={deleteItem}/>)}
                <button className="finishButton"  onClick={clearFullCart}>Finish purchase</button>
            </div>}

            {console.log(cartArray)}
        </div>
    )
}

export default Cart