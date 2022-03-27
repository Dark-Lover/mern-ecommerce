import React, { useEffect } from "react";
import Main from "./containers/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import Cart from "./pages/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ALL_PRODUCTS, TURNOFF } from "./api/productsFeatures";
import { getAllProductsAPI } from "./api/axiosRequests";
import { Button } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const { needFetch } = useSelector((state) => state.products);
  useEffect(() => {
    if (needFetch) {
      getAllProductsAPI()
        .then((res) => {
          console.log("we are fetching");
          dispatch(FETCH_ALL_PRODUCTS(res));
          dispatch(TURNOFF());
        })
        .catch((err) => console.log(err));
    }
  }, [needFetch]);
  return (
    <>
      <Main>
        {/* <HeaderContainer>
          <Header />
        </HeaderContainer>
        <HeroSection />
        <Categories />
        <ProductList cat="Home" />
        <FooterSection /> */}
        <Button
          variant="outlined"
          onClick={() => dispatch(TURNOFF())}
          justify="center"
        >
          fetch
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
