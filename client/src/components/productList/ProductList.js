import React from "react";
//prettier-ignore
import {
  Container,Typography,Grid
} from "@mui/material";
import ProductCard from "./productCard/ProductCard";
import { useSelector } from "react-redux";

const ProductList = ({ cat }) => {
  const { catData } = useSelector((state) => state.products);
  const { bestProd } = useSelector((state) => state.products);
  console.log("Here is the cat data: ", catData);
  return (
    <section className="py-12 px-4 ">
      <Container>
        <Typography
          variant="h6"
          component="h2"
          className="text-center text-primary mb-4 capitalize"
        >
          {cat ? `${cat} Articles` : "Cheapest Offers"}
        </Typography>
        <Grid container spacing={2} className="justify-center">
          {catData.length !== 0 && cat
            ? catData.map((prod) => <ProductCard prod={prod} key={prod._id} />)
            : bestProd.length !== 0
            ? bestProd.map((prod) => (
                <ProductCard prod={prod} key={prod._id} isBest={true} />
              ))
            : "Loading"}

          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </Grid>
      </Container>
    </section>
  );
};

export default ProductList;
