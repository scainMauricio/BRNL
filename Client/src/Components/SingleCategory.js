import React from "react";
import { NavLink } from "react-router-dom";

const baseURL = "http://localhost:3000/";

export default function SingleCategory({ category }) {
  return (
    <>
      <NavLink
        className="categoryBox"
        to={"/category/" + category.name}
        style={{ textDecoration: "none" }}
      >
        <div className="categoryIcon">
          <img
            className="categoryImg"
            src={category.logo}
            alt={category.name}
          ></img>
        </div>
        <div className="categoryName">{category.name}</div>
      </NavLink>
    </>
  );
}
