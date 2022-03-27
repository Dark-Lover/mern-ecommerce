import React, { useState } from "react";
import hero from "./../../assets/hero.jpg";
//prettier-ignore
import {
  Box,Button,Card,Container,FormControl,Grid,InputLabel,MenuItem,Select,Typography,
} from "@mui/material";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const handleChange = (e) => {
    setQty(e.target.value);
  };
  console.log("Qty state is: ", qty);
  return (
    <Container className="py-8">
      <Grid container>
        <Grid item>
          <img
            src={hero}
            alt="product"
            className="h-full w-full object-cover rounded-xl"
          />
        </Grid>
        <Grid item className="w-full">
          <Typography variant="h6" component="h1" align="center" gutterBottom>
            Swiss Made Vegetable Cutting Knife
          </Typography>
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            className="text-secondary"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa
            provident illum culpa voluptate ratione?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi praesentium laborum itaque
            temporibus consectetur asperiores.
          </Typography>
          <Box className="flex mb-4">
            <Box className="w-20 h-14 grow-0 border-2 border-secondary_light rounded-lg flex items-center justify-center ">
              $ <span className="font-bold "> 25</span>
            </Box>
            <Box className="w-full flex items-center ml-4">Save 12%</Box>
          </Box>
        </Grid>
        <Grid item className="flex gap-4 ">
          <Box sx={{ minWidth: 100, maxWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="qty-select-label">Quantity</InputLabel>
              <Select
                labelId="qty-select-label"
                id="qty-select"
                value={qty}
                label="Quantity"
                onChange={handleChange}
                size="small"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={1}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" className="capitalize">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
