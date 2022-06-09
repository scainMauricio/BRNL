import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import SingleProductByCategory from "../Components/SingleProductByCategory";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import categoriesLogos from "../Utils/CategoriesLogo";

export default function Food({ products }) {
  let { cat } = useParams();

  let logo = categoriesLogos[`${cat}`];

  const filteredProducts = products.filter((item) => {
    if (item.category === cat.toString().toLowerCase()) {
      return item;
    }
  });

  return (
    <>
      <div className="titleContainer">
        <NavLink to="/" className="backNav">
          <img
            className="backBtn"
            src="https://res.cloudinary.com/brnl/image/upload/v1654711651/brnl/left-arrow_nunq1q.png"
          ></img>
        </NavLink>
        <div className="categoryTitle">
          <img className="categoryLogo" src={logo}></img> {cat}
        </div>
      </div>
      <section className="singleProductContainer">
        {filteredProducts.map((product) => {
          return (
            <SingleProductByCategory
              product={product}
            ></SingleProductByCategory>
          );
        })}
      </section>
    </>
  );
}
