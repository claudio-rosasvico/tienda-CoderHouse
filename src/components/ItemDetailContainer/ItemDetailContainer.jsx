import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setproducto] = useState();

  const getProductDB = (id) => {
    const productRef = doc(db, "products", id);

    getDoc(productRef).then((response) => {
      const producto = {
        id: response.id,
        ...response.data(),
      };
      setproducto(producto);
    });
  };

  useEffect(() => {
    getProductDB(id);
  }, []);

  return (
    <>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
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
      )}
    </>
  );
};
