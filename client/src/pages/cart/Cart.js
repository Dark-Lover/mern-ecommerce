import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductInfos from "../../components/productDetails/ProductInfos";
import HeaderContainer from "../../containers/HeaderContainer";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="min-h-screen  flex flex-col ">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container className="py-4 flex justify-center flex-grow ">
        <Typography variant="h6" component="h1" className="text-primary">
          Your Order
        </Typography>
      </Container>
      <FooterSection />
    </div>
  );
};

export default Cart;
