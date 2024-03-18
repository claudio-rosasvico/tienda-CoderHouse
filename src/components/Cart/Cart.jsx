import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { MdOutlineDelete, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegFaceFrown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, cleanCart, removeItem, totalProducts, totalPrecio, addItem, toastRemove } =
    useContext(CartContext);
  let cod = 0;

  const setQuantity = (operacion, product) => { 
    if(operacion == 'resta' && product.quantity > 0){
      addItem(product, (-1))
    } else if (operacion == 'sum'){
      addItem(product, (1))
    }
   }

  return (
    <div className="container">
      {cart.length == 0 ? (
        <div className="text-center mt-5">
          <h2>Carrito Vacio</h2>
          <FaRegFaceFrown className="fs-1" />
          <img src="" alt="" />
        </div>
      ) : (
        <div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">...</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr>
                  <th scope="row">{(cod = cod + 1)}</th>
                  <td>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.imagen}
                        className="img-fluid rounded-start"
                        alt={product.imagen}
                        width={60}
                      ></img>
                      {product.nombre}
                    </Link>
                  </td>
                  <td>
                    $ {new Intl.NumberFormat("es-AR").format(product.precio)}
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={() => setQuantity('resta', product)}> - </button>
                    <small className="mx-2">{product.quantity}</small>
                    <button className="btn btn-sm btn-primary" onClick={() => setQuantity('sum',product)}> + </button>
                  </td>
                  <td>
                    $ {new Intl.NumberFormat("es-AR").format(product.subtotal)}
                  </td>
                  <td>
                    <MdOutlineDelete
                      className="fs-3"
                      onClick={() => removeItem(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row justify-content-between">
            <button
              type="button"
              className="col-12 col-lg-5 m-1 btn btn-warning"
              onClick={() => {cleanCart(); toastRemove()}}
            >
              <MdOutlineDelete className="fs-4" />
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="col-12 col-lg-6">
              <button type="button" className="m-1 btn btn-success col-12">
                <MdOutlineShoppingCartCheckout className="fs-4" /> Completar
                Compra
              </button>
            </Link>
          </div>
          <div className="text-end mt-3">
            <h3>Cantidad de Productos: {totalProducts}</h3>
            <h3>
              Precio Total: ${" "}
              {new Intl.NumberFormat("es-AR").format(totalPrecio)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};
