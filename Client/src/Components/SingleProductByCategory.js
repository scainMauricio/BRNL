import React from "react";
import { NavLink } from "react-router-dom";

export default function SingleProductByCategory({ product }) {
  const filterDescription = product.description.split(",").slice(0, 3);

  return (
    <>
      <NavLink className="" to={"/brand/" + product._id}>
        <div className="singleCard">
          <div className="singleCardInfo">
            <div className="singleCardName">{product.name}</div>
            <div className="singleCardDescription">
              {" "}
              <ul>
                {filterDescription.map((hasht) => {
                  return <li className="hashtag">{hasht}</li>;
                })}
              </ul>
            </div>

            <div className="singleCardCity">
              {" "}
              <a>
                <img
                  src="https://res.cloudinary.com/brnl/image/upload/v1654854964/brnl/localizacao_qz4cfn.png"
                  className="icon"
                ></img>
                {product.city}
              </a>
            </div>
          </div>
          <div className="singleCardImageContain">
            {" "}
            <img className="sinceCardImage" src={product.logo}></img>{" "}
          </div>
        </div>
      </NavLink>
    </>
  );
}
{
  /* <div className="singleCardImageContain" style={styling}> */
}
