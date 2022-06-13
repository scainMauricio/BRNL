import React, { useContext } from "react";
import SingleProductCard from "./SingleProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { searchContext } from "../Contexts/searchContext";

export default function SingleProductDetails({ products, cat, _id }) {
  const { searchTerm } = useContext(searchContext);

  //search +  return no results found. Should refactor in a better way.
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
                  <SingleProductCard product={product}></SingleProductCard>
                </SplideSlide>
              );
            })}
        </Splide>
      </section>
    </>
  );
}
