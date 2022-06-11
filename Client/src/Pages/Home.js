import React from "react";
import CategoryList from "../Components/CategoryList";
import ProductsList from "../Components/ProductsList";

export default function Home({ products }) {
  return (
    <>
      <div className="h1div">
        Explore brazilian services in the Netherlands
        {/* <div className="word">
          {" "}
          <span>services</span> <span>food</span>
          <span>health</span>
          <span>beauty</span>
          <span>languages</span>
        </div>{" "}
        <div>professionals in the Netherlands.</div> */}
      </div>

      <CategoryList></CategoryList>
      <ProductsList products={products}></ProductsList>
    </>
  );
}
