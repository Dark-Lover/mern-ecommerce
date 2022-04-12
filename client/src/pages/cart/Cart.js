import React from "react";
import { Container } from "@mui/material";
import FooterSection from "../../components/footer/Footer";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
const Cart = () => {
  return (
    <div className="min-h-screen  flex flex-col ">
      <Container className="py-4 flex justify-center flex-grow  ">
        <CheckoutForm />
      </Container>
      <FooterSection />
    </div>
  );
};

export default Cart;
