import React from "react";
import style from "./style.module.css";

function ItemListContainer({greeting}) {
  return (
    <div className={'text-center mt-5'}>
      <h1>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;
