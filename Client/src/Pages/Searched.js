import React, { useEffect, useState, useContext } from "react";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";
import SingleProductByCategory from "../Components/SingleProductByCategory";
import { useNavigate } from "react-router-dom";

export default function Searched({ products }) {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  const navigate = useNavigate();
  return (
    <>
      <section className="singleProductContainer">
        {products
          .filter((product) => {
            if (searchTerm === "") {
              navigate(-1);
            } else if (
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => {
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
