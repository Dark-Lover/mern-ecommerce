import React, { useEffect } from "react";
import Main from "./containers/Main";
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

const App = () => {
  const dispatch = useDispatch();
  const { needFetch } = useSelector((state) => state.products);
  useEffect(() => {
    if (needFetch) {
      getAllProductsAPI()
        .then((res) => {
          console.log("we are fetching all");
          dispatch(FETCH_ALL_PRODUCTS(res));
          dispatch(TURNOFF());
        })
        .catch((err) => console.log(err));
      getBestProductsAPI()
        .then((res) => {
          console.log("we are fetching best");
          dispatch(FETCH_BEST(res));
        })
        .catch((err) => console.log("Error in fetching best Prod", err));
    }
  }, [needFetch]);
  return (
    <>
      <Main className="relative">
        {/* <HeaderContainer>
          <Header />
        </HeaderContainer>
        <HeroSection />
        <Categories />
        <ProductList cat="Home" />
        <FooterSection /> */}
        {/* <Button
          variant="outlined"
          onClick={() => dispatch(TURNOFF())}
          justify="center"
        >
          fetch
        </Button> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path=":category/product/:id" element={<ProductPage />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
