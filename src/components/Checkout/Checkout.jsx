import React, { useContext, useState } from "react";
import style from "./style.module.css";
import Camion from "../../assets/img/camion.gif"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const Checkout = () => {
  const { cart, totalPrecio, cleanCart } = useContext(CartContext);
  const [state, setState] = useState({
    number: "",
    name: "NOMBRE TITULAR",
    cvc: "",
    expiry: "",
    focus:"",
    email: "",
    phone: 0,
  });
  const [orderId, setOrderId] = useState(null);

  const handleFocus = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitPayment = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: state,
      items: cart,
      totalPrecio,
      date: serverTimestamp(), // Método de firebase par guardar la fecha
    };

    const order = await addDoc(collection(db, "orders"), newOrder);

    setState({
      number: "",
      name: "NOMBRE TITULAR",
      cvc: "",
      expiry: "",
      email: "",
      phone: 0,
    });

    cleanCart();

    setOrderId(order.id);
  };

  return (
    <>
      {orderId ? (
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col text-center">
              <img src={Camion} alt="" width="300px" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col  text-center">
              <h2>¡FELICITACIONES TU COMPRA ESTA EN CAMINO!!</h2>
              <p>El códiog de compra es #{orderId}</p>
            </div>
          </div>

        </div>
      ) : (
        <div className="card">
          <div className={`card-body ${style.fondo}`}>
            <Cards
              cvc={state.cvc}
              expiry={state.expiry}
              focused={state.focus}
              name={state.name}
              number={state.number}
            />
            <form className="mt-3">
              <div className="form-group">
                <label htmlFor="number">Número de la tarjeta</label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  maxLength="16"
                  placeholder="Número de tarjeta"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  maxLength="30"
                  placeholder="Nombre"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="expiry">Vencimiento</label>
                  <input
                    type="text"
                    className="form-control"
                    name="expiry"
                    maxLength="4"
                    placeholder="Vencimiento"
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cvc"
                    maxLength="4"
                    placeholder="CVC"
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Número de teléfono</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Número de teléfono"
                  onChange={handleChange}
                />
              </div>
              <div className={`${style.pagar} row`}>
                <button
                  type="button"
                  className="btn btn-success btn-block mt-3 col-12"
                  onClick={submitPayment}
                >
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
