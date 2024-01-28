import React from "react";
import logo from "./assets/Logo.png";
import style from "./style.module.css";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <div className={` ${style.container}`}>
      <div className="row align-items-center">
        <div className="col">
          <img src={logo} alt="" width="200px" />
        </div>
        <div className="col text-center">
          <h1>Tienda de Electrónica</h1>

          <button type="button" className="btn btn-dark fs-2">
            Celulares
          </button>
          <button type="button" className="btn btn-dark fs-2">
            NoteBooks
          </button>
          <button type="button" className="btn btn-dark fs-2">
            PC
          </button>
        </div>
        <div className="col text-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
