import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc , doc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();


    useEffect(()=>{

            const productsCollection = collection(db,"productos")
            const docRef = doc(productsCollection,id)
            const request = getDoc(docRef)
            

            request
            .then((result)=>{
                const producto = result.data()
                setProducto(producto)
                
            })
            .catch((error)=>{
                console.log(error)
            })
            setTimeout(() => {
                setLoading(false)
            }, 2000);
            },[id])
        
    return (
        <div>
            {loading ? <h1>... Loading </h1> 
                     :<ItemDetail producto={producto} idProduct={id} />}
        </div>
    )
}

export default ItemDetailContainer