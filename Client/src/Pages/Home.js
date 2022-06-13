import React from "react";
import CategoryIconList from "../Components/CategoryIconList";
import AllProductsList from "../Components/AllProductsList";

export default function Home({ products }) {
  return (
    <>
      <div className="h1div">Explore brazilian services in the Netherlands</div>

      <CategoryIconList></CategoryIconList>
      <AllProductsList products={products}></AllProductsList>
    </>
  );
}
