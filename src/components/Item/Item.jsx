import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, marca, precio, stock, imagen, detalle }) => {
  return (
    <div className="col-12 col-lg-4 mt-3"> {/* PONER SOMBRA */}
      <div className="card mb-3 ms-2 " style={{ maxWidth: 540, boxShadow: '2px 4px 5px 3px rgba(0, 0, 0, 0.5)'}}>
        <div className="row g-0 align-items-center">
          <div className="col-12 col-lg-4">
            <img
              src={`/src/assets/img/products/${imagen}`}
              className="img-fluid rounded-start"
              alt={imagen} width={500} 
            ></img>
          </div>
          <div className="col-12 col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <h3>$ {precio}</h3>
              <p className="card-text">
                <small className="text-body-secondary">
                  ({marca})
                </small>
              </p>
              <Link to={`/product/${id}`}>
              <button type="button" className="btn btn-primary">
                Detalle
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
