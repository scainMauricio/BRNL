import "./App.css";
import Navbar from "./Components/Navbar";
import { getAll } from "./Service";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import { SearchContextProvider } from "./Contexts/searchContext";
import ProductDetails from "./Pages/ProductDetails";
import Advertise from "./Pages/Advertise";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      console.log(data, "data");
      setProducts(data);
    });
  }, []);

  //refactor routers to a new file (?)

  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home products={products}></Home>}></Route>
            <Route
              path="/brand/:_id"
              element={<ProductDetails products={products}></ProductDetails>}
            ></Route>
            <Route
              path="/category/:cat"
              element={<Category products={products}></Category>}
            ></Route>
            <Route path="/advertise" element={<Advertise></Advertise>}></Route>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
}

export default App;
