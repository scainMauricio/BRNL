import "./App.css";
import Navbar from "./Components/Navbar";
import { getAll } from "./Service";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import { SearchContextProvider } from "./Contexts/searchContext";
import Searched from "./Pages/Searched";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home products={products}></Home>}></Route>
            <Route
              path="/category/:cat"
              element={<Category products={products}></Category>}
            ></Route>
            {/* <Route
              path="/searched/:search"
              element={<Searched products={products}></Searched>}
            ></Route> */}
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
}

export default App;
