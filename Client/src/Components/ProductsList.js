import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";

export default function ProductsList({ products }) {
  const { searchTerm, setSearchTerm } = useContext(searchContext);

  //search function

  let filtered = products.filter((product) => {
    if (
      searchTerm === "" ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return product;
    }
  });

  //no results

  if (!filtered.length)
    return (
      <div className="noResultsHome">
        <span className="noResultSpan">
          No Results Found for "{searchTerm}"{" "}
        </span>
      </div>
    );

  //return

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
          {filtered.map((product) => {
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
