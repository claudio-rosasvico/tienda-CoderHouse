import React, { useEffect, useState } from "react";
import { getProducts } from "../../AsyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productFilter = resp.filter(
          (product) => product.categoria == category
        );
        setProducts(productFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h1 className="mt-4 mb-4">Cargando</h1>
          <div className="spinner-grow mx-4" style={{ width: 50, height: 50 }} role="status" >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-4" style={{ width: 50, height: 50 }} role="status" >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-4 " style={{ width: 50, height: 50 }} role="status" >
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
