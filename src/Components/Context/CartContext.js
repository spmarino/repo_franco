import React, { createContext , useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) =>{

    const [cartArray, setCartArray] = useState([]);


    const addToCart = (articulo)=>{

        if(isInCart(articulo.id)){
            // const findTheIndex= cartArray.findIndex(element => element.id === articulo.id)
            // cartArray[findTheIndex].cantidad = cartArray[findTheIndex].cantidad + cantidad

            console.log("Este producto ya ha sido agregado al carrito")
        } else {
            // const newObject = {
            //     item: producto,
            //     contador
            // }
            setCartArray([...cartArray,articulo])            
        }
    }
    const deleteItem = (id)=>{
        const updatedCart = cartArray.filter(element => element.id !== id);
        setCartArray(updatedCart);
    }

    const clearCart = ()=>{
        setCartArray([]);
    }

    const isInCart = (id)=>{
        return cartArray.some(element => element.id === id);
    }

    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart
    }

        return (
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        )
}

export default CartProvider;