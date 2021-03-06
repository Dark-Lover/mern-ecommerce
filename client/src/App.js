import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import Cart from "./pages/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_ALL_PRODUCTS,
  FETCH_BEST,
  TURNOFF,
} from "./api/productsFeatures";
import { getAllProductsAPI, getBestProductsAPI } from "./api/axiosRequests";
import { Button } from "@mui/material";
import ProductPage from "./pages/product/ProductPage";
import HeaderContainer from "./containers/HeaderContainer";
import Header from "./components/header/Header";

const App = () => {
  const dispatch = useDispatch();
  const { needFetch } = useSelector((state) => state.products);
  useEffect(() => {
    if (needFetch) {
      getAllProductsAPI()
        .then((res) => {
          dispatch(FETCH_ALL_PRODUCTS(res));
          dispatch(TURNOFF());
        })
        .catch((err) => console.log(err));
      getBestProductsAPI()
        .then((res) => {
          dispatch(FETCH_BEST(res));
        })
        .catch((err) => console.log("Error in fetching best Prod", err));
    }
  }, [needFetch]);
  return (
    <>
      <div className="relative">
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path=":category/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
