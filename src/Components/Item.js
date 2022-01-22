import { Link } from "react-router-dom"

const Item = ({producto})=>{
    const {titulo,precio,descripcion,imagen,id} = producto
    return (
        <article className="item">
            <img src={`/${imagen}`}/>
            <h2>{titulo}</h2>
            <p>${precio}</p>
            <Link className="botonItem btn btn-primary" to={`/item/${id}`}>Ver mas</Link>
        </article>
    )
}

export default Item 