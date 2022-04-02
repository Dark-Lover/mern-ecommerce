import React, { useState } from "react";
//prettier-ignore
import {
  Box,Button,FormControl,Grid,InputLabel,MenuItem,Select,Typography,
} from "@mui/material";
import hero from "./../../assets/hero.jpg";
import { useSelector } from "react-redux";

const ProductInfos = ({ product }) => {
  console.log("Product Title from ProductInfo comp: ", product);
  const allData = useSelector((state) => state.products.data);
  const ProductData = allData.filter((el) => el._id === product);
  console.log(ProductData);
  const [qty, setQty] = useState(1);
  const handleChange = (e) => {
    setQty(e.target.value);
  };
  return (
    <Grid container className=" max-w-5xl">
      {ProductData.length !== 0 ? (
        <>
          {/* Image  */}
          <Grid item xs={12} sm={6} className=" w-full">
            <img
              src={ProductData[0].image}
              alt="product"
              className="h-full max-h-80 w-full object-contain rounded-xl"
            />
          </Grid>
          {/* Product Info  */}
          <Grid item xs={12} sm={6} className="w-full pt-2  px-4">
            <Typography variant="h6" component="h1" align="center" gutterBottom>
              {ProductData[0].title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              gutterBottom
              className="text-secondary"
            >
              {ProductData[0].description}
            </Typography>
            <Box className="flex my-4">
              <Box className="w-20 h-10 grow-0  bg-bgTest rounded-lg flex items-center justify-center text-neutral-500 font-bold text-secondary_light">
                $
                <span className=" font-bold text-textTest ">
                  {ProductData[0].price}
                </span>
              </Box>
              <Box className="w-full flex items-center ml-4 font-bold text-green-500">
                <span className="text-textGreen">Save 12%</span>
              </Box>
            </Box>
            <Grid item xs={12} className="flex gap-4 ">
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
        </>
      ) : (
        "Loading"
      )}
    </Grid>
  );
};

export default ProductInfos;
