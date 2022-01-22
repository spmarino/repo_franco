import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection , getDocs , query , where } from "firebase/firestore"

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{   
        if(id){
            const productsCollection = collection(db,"productos")
            const filter = where("categoria","==",id)
            const myQuery = query(productsCollection,filter)
            const request = getDocs(myQuery)
            request
            .then((result)=>{
                setProductos(result.docs.map(doc=>({id: doc.id,...doc.data()})))
                
            })
            .catch((error)=>{
                console.log(error)
            })

            setTimeout(() => {
                setLoading(false)
            }, 2000);
        } else {
            const productsCollection = collection(db,"productos")
            const request = getDocs(productsCollection)
            request
            .then((result)=>{
                setProductos(result.docs.map(doc=>({id: doc.id,...doc.data()})))
                
            })
            .catch((error)=>{
                console.log(error)
            })

            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }

        },[id])

        return(
            <div>
            {loading 
                     ? <h1> ... Loading</h1> 
                     : <ItemList itemsProductos={productos} />}
                     {console.log(productos)}
            </div>       
              )
    }
    

export default ItemListContainer
