import React from "react";
import Main from "./containers/Main";
import HeaderContainer from "./containers/HeaderContainer";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import HeroSection from "./components/hero/HeroSection";
import Categories from "./components/categories/Categories";
const App = () => {
  return (
    <>
      <Main>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <HeroSection />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />}>
            <Route path=":category" />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
