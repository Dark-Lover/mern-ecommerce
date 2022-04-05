import React from "react";
import { Container } from "@mui/material";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderContainer from "../../containers/HeaderContainer";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="min-h-screen  flex flex-col ">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container className="py-4 flex justify-center flex-grow bg-primary_light ">
        <CheckoutForm />
      </Container>
      <FooterSection />
    </div>
  );
};

export default Cart;
