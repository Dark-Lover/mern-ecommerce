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
    <Container className="py-8 ">
      <Grid container>
        <Grid item className="bg-primary w-full">
          <img
            src={hero}
            alt="product"
            className="h-full max-h-80 w-full object-cover rounded-xl"
          />
        </Grid>
        <Grid item className="w-full pt-2">
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
          <Box className="flex my-4">
            <Box className="w-20 h-10 grow-0  bg-bgTest rounded-lg flex items-center justify-center text-neutral-500">
              $ <span className=" font-bold text-textTest "> 25</span>
            </Box>
            <Box className="w-full flex items-center ml-4 font-bold text-green-500">
              <span className="text-textGreen">Save 12%</span>
            </Box>
          </Box>
        </Grid>
        <Grid item className="flex gap-4 ">
          <Box sx={{ minWidth: 60, maxWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="qty-select-label">QTY</InputLabel>
              <Select
                labelId="qty-select-label"
                id="qty-select"
                value={qty}
                label="QTY"
                onChange={handleChange}
                size="small"
                className="font-bold text-textTest"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={1}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" className="capitalize bg-textTest">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
