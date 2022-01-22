import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const Nav = () => {

    return (
        <nav>
            
            <div id="divLogo">
            <Link to = "/"><img src="/logo512.png" alt="" /></Link>
            </div>

            <div id="divTituloLogo">
            <Link to = "/"><h1 className="tituloLogo">ProyectoGrowShop</h1></Link>
            </div>

            <div id="divDeCategorias"> 
            <Link className="categoria1" to={`/categoria/vegetacion`}>Vegetación</Link>
            <Link className="categoria2" to={`/categoria/floracion`}>Floración</Link>
            </div>

            <Link to="/carrito"><CartWidget></CartWidget></Link>

        </nav>
    )
}
export default Nav


