import React from "react";
import SingleCategoryIcon from "./SingleCategoryIcon";
import categories from "../Utils/CategoriesData";

export default function CategoryIconList() {
  return (
    <>
      <section className="categorySection">
        {categories.map((category) => {
          return <SingleCategoryIcon category={category}></SingleCategoryIcon>;
        })}
      </section>
    </>
  );
}
