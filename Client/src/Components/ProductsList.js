import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";

export default function ProductsList({ products }) {
  const { searchTerm, setSearchTerm } = useContext(searchContext);

  // {movies
  //   .filter((movie) => {
  //     if (searchTerm == "") {
  //       return movie;
  //     } else if (
  //       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) {
  //       return movie;
  //     }
  //   })
  //   .map((movie) => {
  //     return movie.vote_average >= status ? compo(movie) : "";
  //   })}

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
          {products
            .filter((product) => {
              if (searchTerm === "") {
                return product;
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
                <SplideSlide>
                  <SingleProduct product={product}></SingleProduct>
                </SplideSlide>
              );
            })}
          {/* {products.map((product) => {
            return (
              <SplideSlide>
                <SingleProduct product={product}></SingleProduct>
              </SplideSlide>
            );
          })} */}
        </Splide>
      </section>
    </>
  );
}
