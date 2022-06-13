import React, { useEffect, useState, useContext } from "react";
import "@splidejs/react-splide/css";
import SingleProductByCategory from "../Components/SingleProductByCategory";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import categoriesLogos from "../Utils/CategoriesLogo";
import { searchContext } from "../Contexts/searchContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SingleProductCard from "../Components/SingleProductCard";

export default function Food({ products }) {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  let { cat } = useParams();
  let logo = categoriesLogos[`${cat}`];

  //filter producs by the category passed on params

  const filteredByCategory = products.filter((item) => {
    if (item.category === cat.toString().toLowerCase()) {
      return item;
    }
  });

  //filter according search

  let filteredBySearch = filteredByCategory.filter((product) => {
    if (searchTerm === "") {
      return product;
    } else if (
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return product;
    }
  });

  //no results found

  if (!filteredBySearch.length)
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
        <section className="byCategoryContainer">
          <div className="noResultsCategory">
            <span className="noResultSpan">
              {" "}
              No Results for "{searchTerm}" in this category{" "}
            </span>
          </div>
        </section>
      </>
    );

  //return

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
      <section className="byCategoryContainer">
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
          {filteredBySearch.map((product) => {
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
