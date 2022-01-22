import {useState, useEffect} from "react"

const Contador = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial);

    useEffect(()=> {
        onAdd(contador)                    
    })

    const aumentarContador  = () => {
        if (contador < stock){
            setContador(contador +1)
        } else {
            console.log("Disculpe, no poseemos mas stock de este producto por el momento")
        }
    }
    const disminuirContador = () => {
        if (contador > initial){
            setContador(contador -1)
        } else {
            console.log("No puede reducir mas la cantidad de productos seleccionados")
        } 
    }
/*     const comprarContador  = () => {
        console.log(`Usted ha comprado ${contador} unidades de este producto`)
        setContador(initial)
    } */
    return (
    <div id="contador">
        
        <button id="botonMas"onClick = {aumentarContador}  > + </button>
        <p>{contador}</p>
        <button id="botonMenos"onClick = {disminuirContador} > - </button>
            
    </div> 
    )
}
export default Contador