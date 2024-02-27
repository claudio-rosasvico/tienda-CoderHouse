import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ nombre, imagen, precio, detalle, marca, stock }) => {
  return (
    <div className="card mx-3 mt-3" style={{boxShadow: '2px 4px 5px 3px rgba(0, 0, 0, 0.5)'}}>
      <div className="row g-0 align-items-center">
        <div className="col-12 col-lg-1">
          <Link to="/">
            <GoArrowLeft className="fs-1"/>
          </Link>
        </div>
        <div className="col-12 col-lg-5">
          <img
            src={`/src/assets/img/products/${imagen}`}
            className="img-fluid rounded-start"
            alt={imagen}
          ></img>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card-body">
            <h5 className="card-title fs-2">{nombre}</h5>
            <p className="fs-3">{detalle}</p>
            <h3 className="fs-2">$ {precio}</h3>
            <p className="card-text">
              <small className="text-body-secondary fs-4">({marca}) Stock: {stock}</small>
            </p>
            <div className="text-center">
              <ItemCount stock={stock}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
