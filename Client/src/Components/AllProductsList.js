import React, { useContext } from "react";
import SingleProductCard from "./SingleProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";

export default function AllProductsList({ products }) {
  const { searchTerm } = useContext(searchContext);

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
                <SingleProductCard product={product}></SingleProductCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </section>
    </>
  );
}
