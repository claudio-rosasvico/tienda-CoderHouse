import { useParams } from "react-router-dom";
import { getProduct } from "../../AsyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
    const {id} = useParams();

    const [producto, setproducto] = useState();

useEffect(() => {
  console.log('id: ' + id);
  getProduct(id)
  .then(resp =>{
    setproducto(resp);
    
  })
}, [])

  return (
    <>
    {producto ? <ItemDetail {...producto}/> : <h2>No hay Producto</h2>}
    </>
  )
}
