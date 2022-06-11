import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SingleProduct({ product }) {
  const filterDescription = product.description.split(",").slice(0, 4);

  return (
    <>
      <NavLink className="" to={"/brand/" + product._id}>
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
      </NavLink>
    </>
  );
}
