import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedproducts } from "../../utils/seedProducts";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  const getProductsDB = (category) => {
    //const myproducts = collection(db, 'products'); // Llamado a la Base de datos sin clasificar categoria (toda la tabla)
    const myproducts = category ? query(collection(db, "products"), where("categoria", "==", category)) : collection(db, "products");

    getDocs(myproducts).then((response) => {

      const products = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });
      setProducts(products);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProductsDB(category);
    //seedproducts(); // SOLO SE EJECUTA UNA VEZ PORQUE SE INGRESAN REPETIDAMENTE LOS PRODUCTOS
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h1 className="mt-4 mb-4">Cargando</h1>
          <div
            className="spinner-grow mx-4"
            style={{ width: 50, height: 50 }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow mx-4"
            style={{ width: 50, height: 50 }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow mx-4 "
            style={{ width: 50, height: 50 }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
}

export default ItemListContainer;
