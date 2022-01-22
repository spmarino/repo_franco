import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import {BrowserRouter} from "react-router-dom"
import CartProvider from "./Components/Context/CartContext"



function App () {
    return (
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>

         
    )
}

export default App
