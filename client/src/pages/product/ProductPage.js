import React from "react";
//prettier-ignore
import {
  Container
} from "@mui/material";
import ProductInfos from "../../components/productDetails/ProductInfos";
import FooterSection from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen  flex flex-col ">
      <Container className="py-8 flex justify-center flex-grow ">
        <ProductInfos product={id} />
      </Container>
      <FooterSection />
    </div>
  );
};

export default ProductPage;
