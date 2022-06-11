import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";

export default function ProductByCategory({ products, cat, _id }) {
  const { searchTerm, setSearchTerm } = useContext(searchContext);

  //search +  return no results found. Should refactor.
  let filtered = products.filter((product) => {
    if (
      searchTerm === "" ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return product;
    }
  });
  if (!filtered.length)
    return (
      <>
        {" "}
        <section className="ProductsSection">
          <div className="noResults">
            <span className="noResultSpan">
              No Results for "{searchTerm}" in this category{" "}
            </span>
          </div>
        </section>
      </>
    );

  return (
    <>
      <section className="ProductsSection">
        <Splide
          options={{
            perPage: 4,
            perMove: 2,
            breakpoints: {
              640: { perPage: 1 },
              1250: { perPage: 3 },
              960: { perPage: 2 },
            },
          }}
        >
          {filtered
            .filter((item) => {
              return item.category === cat && item._id !== _id;
            })
            .map((product) => {
              return (
                <SplideSlide>
                  <SingleProduct product={product}></SingleProduct>
                </SplideSlide>
              );
            })}
        </Splide>
      </section>
    </>
  );
}
