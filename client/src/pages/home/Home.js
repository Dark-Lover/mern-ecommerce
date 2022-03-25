import React from "react";
import Categories from "../../components/categories/Categories";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero/HeroSection";
import ProductList from "../../components/productList/ProductList";
import HeaderContainer from "../../containers/HeaderContainer";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <HeroSection />
      <Categories />
      <ProductList />
      <FooterSection />
    </>
  );
};

export default Home;
