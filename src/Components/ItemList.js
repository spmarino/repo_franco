import Item from "./Item"
const ItemList = ({itemsProductos})=>{
    return (
        <div id="divDeItemFetch" >
            {itemsProductos.map(producto =>{
                return <Item producto={producto}/>
            })}
        </div>
    )
}
export default ItemList 