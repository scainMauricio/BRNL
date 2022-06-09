import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ProductByCategory() {
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
          {products.map((product) => {
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
}
