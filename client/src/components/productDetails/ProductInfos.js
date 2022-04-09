import React, { useState } from "react";
//prettier-ignore
import {
  Box,Button,FormControl,Grid,InputLabel,MenuItem,Select,Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../api/cartFeatures";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    neutral: {
      main: "#7368b6",
      contrastText: "#fff",
    },
    primary: {
      main: "#7368b6",
    },
  },
});

const ProductInfos = ({ product }) => {
  console.log("Whats Wrong: ", product);
  const dispatch = useDispatch();
  // const [checked, setChecked] = useState(false);
  const [updateQty, setUpdateQty] = useState(false);
  // get product infos
  const allData = useSelector((state) => state.products.data);
  const ProductData = allData.filter((el) => el._id === product);

  const [qty, setQty] = useState(1);
  // check if the product is already in the cart
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemFlag = cartItems.filter((el) => el._id === product);

  const handleChange = (e) => {
    setQty(e.target.value);
    setUpdateQty(true);
  };
  return (
    <Grid container className=" max-w-5xl items-center">
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
              <Box className="w-20 h-10 grow-0  bg-bgTest rounded-lg flex items-center justify-center text-neutral-500 font-bold text-secondary_light px-4">
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
                    value={
                      cartItemFlag.length !== 0 && !updateQty
                        ? cartItemFlag[0].qty
                        : qty
                    }
                    label="QTY"
                    onChange={handleChange}
                    size="small"
                    className="font-bold text-textTest"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <ThemeProvider theme={theme}>
                {/* <Button
                  variant={checked && !updateQty ? "contained" : "outlined"}
                  // className="capitalize bg-textTest"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => {
                    dispatch(ADD_TO_CART({ prod: ProductData[0], qty: qty }));
                    setChecked(true);
                    setUpdateQty(false);
                  }}
                >
                  {checked && !updateQty
                    ? "In Cart"
                    : updateQty
                    ? "Update Qty"
                    : "Add to cart"}
                </Button> */}
                <Button
                  variant={
                    cartItemFlag.length !== 0 && !updateQty
                      ? "contained"
                      : "outlined"
                  }
                  // className="capitalize bg-textTest"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => {
                    dispatch(ADD_TO_CART({ prod: ProductData[0], qty: qty }));
                    // setChecked(true);
                    setUpdateQty(false);
                  }}
                >
                  {cartItemFlag.length !== 0 && !updateQty
                    ? "In Cart"
                    : updateQty && cartItemFlag.length !== 0
                    ? "Update Qty"
                    : "Add to cart"}
                </Button>
              </ThemeProvider>
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
