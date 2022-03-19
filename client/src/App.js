import React from "react";
import Main from "./containers/Main";
import HeaderContainer from "./containers/HeaderContainer";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
const App = () => {
  return (
    <>
      <Main>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
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
