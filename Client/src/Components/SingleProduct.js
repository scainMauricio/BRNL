import React from "react";

export default function SingleProduct({ product }) {
  const filterDescription = product.description.split(",").slice(0, 4);

  return (
    <>
      <div className="card">
        <div className="cardInfo">
          <div className="cardName">{product.name}</div>
          <div className="cardDescription">
            <ul>
              {filterDescription.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="cardCity">{product.city}</div>
        </div>
        <div className="cardImageContain">
          {" "}
          <img className="cardImage" src={product.logo}></img>{" "}
        </div>
      </div>
    </>
  );
}
