import React from "react";
import CategoryList from "../Components/CategoryList";
import ProductsList from "../Components/ProductsList";

export default function Home({ products }) {
  return (
    <>
      <div className="h1div">
        Explore brazilian services in the Netherlands.
      </div>
      <CategoryList></CategoryList>
      <ProductsList products={products}></ProductsList>
    </>
  );
}
