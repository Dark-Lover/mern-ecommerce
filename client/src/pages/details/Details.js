import React from "react";
import { useParams } from "react-router-dom";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductList from "../../components/productList/ProductList";
import HeaderContainer from "../../containers/HeaderContainer";
const Details = () => {
  const category = useParams();
  // console.log("here in detail page: ", typeof category);
  console.log(category);
  return (
    <section>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ProductList cat={category.category} />
      <FooterSection />
    </section>
  );
};

export default Details;
