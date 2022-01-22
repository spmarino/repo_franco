import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Cart from "./Cart"

const Main = () => {
    return (  
        <main>
            <img id="imagenBanner" src="/bannerGrow.jpg"/>
            <h1 id="tituloBanner">Todo lo que necesitás, en un solo lugar.</h1>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>    
                <Route path="/categoria/:id" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}
export default Main