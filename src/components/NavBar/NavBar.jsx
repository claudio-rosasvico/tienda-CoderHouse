import logo from "../../assets/img/Logo.png";
import style from "./style.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={` ${style.container}`}>
      <div className="row align-items-center">
        <div className="col">
          <Link to="/">
          <img src={logo} alt="" width="200px" />
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/">
          <h1 className={` ${style.titulo}`}>Tienda de Electrónica</h1>
          </Link>
          <Link to="/category/celulares" >
          <button type="button" className="btn btn-dark fs-2">
            Celulares
          </button>
          </Link >
          <Link to="/category/notebooks" >
          <button type="button" className="btn btn-dark fs-2">
            NoteBooks
          </button>
          </Link>
          <Link to="/category/accesoriosPC" >
          <button type="button" className="btn btn-dark fs-2">
            PC
          </button>
          </Link>
        </div>
        <div className="col text-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
