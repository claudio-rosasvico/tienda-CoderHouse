import { Item } from '../Item/Item'
import style from "./style.module.css";

export const ItemList = ( {products} ) => {
  return (
    <div className={`row justify-content-center ${style.itemList}`}>

    {products.map( product => <Item key={product.id} {...product} />)}
    </div>
  )
}
