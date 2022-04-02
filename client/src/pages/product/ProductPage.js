import React from "react";
//prettier-ignore
import {
  Container
} from "@mui/material";
import ProductInfos from "../../components/productDetails/ProductInfos";
import HeaderContainer from "../../containers/HeaderContainer";
import Header from "../../components/header/Header";
import FooterSection from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <main className="min-h-screen  flex flex-col ">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container className="py-8 flex justify-center flex-grow ">
        <ProductInfos product={id} />
      </Container>
      <FooterSection />
    </main>
  );
};

export default ProductPage;
