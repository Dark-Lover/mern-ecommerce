import React from "react";
//prettier-ignore
import {
  Container,Typography,Grid
} from "@mui/material";
import ProductCard from "./productCard/ProductCard";

const ProductList = ({ cat }) => {
  return (
    <section className="py-12 px-4 ">
      <Container>
        <Typography
          variant="h6"
          component="h2"
          className="text-center text-primary mb-4 capitalize"
        >
          {cat ? `${cat} Articles` : "Best Sellers"}
        </Typography>
        <Grid container spacing={2} className="justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container>
    </section>
  );
};

export default ProductList;
