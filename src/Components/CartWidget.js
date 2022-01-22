import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "./Context/CartContext";




const CartWidget = () => {
    const {cartArray} = useContext(CartContext)
    if(cartArray.length >= 1){
    return (
     <Link to="/cart"><div><p><span className="material-icons">shopping_cart</span>{cartArray.length}</p></div></Link>
        )
    } else {
        return (
        <Link to="/cart"><div><p><span className="material-icons">shopping_cart</span></p></div></Link>
        )
    }
}

export default CartWidget