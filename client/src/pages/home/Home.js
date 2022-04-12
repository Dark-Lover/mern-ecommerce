import React from "react";
import Categories from "../../components/categories/Categories";
import FooterSection from "../../components/footer/Footer";
import HeroSection from "../../components/hero/HeroSection";
import ProductList from "../../components/productList/ProductList";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <ProductList />
      <FooterSection />
    </>
  );
};

export default Home;
