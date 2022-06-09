import React from "react";
import SingleCategory from "./SingleCategory";
import categories from "../Utils/CategoriesData";

export default function CategoryList() {
  return (
    <>
      <section className="categorySection">
        {categories.map((category) => {
          return <SingleCategory category={category}></SingleCategory>;
        })}
      </section>
    </>
  );
}
