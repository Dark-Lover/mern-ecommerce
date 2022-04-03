import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./../../../api/cartFeatures";
//prettier-ignore
import {
  Grid,Card,CardContent,CardMedia,CardActions,Typography,Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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

const ProductCard = ({ prod, isBest }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={4} className="flex justify-center">
      <Card sx={{ maxWidth: 345 }} className=" flex flex-col ">
        <CardMedia
          component="img"
          height="140"
          image={prod.image}
          alt="green iguana"
          className="h-60 object-contain"
        />
        <div className="flex flex-col flex-grow ">
          <CardContent className="text-center flex-col flex-grow">
            <Typography gutterBottom variant="h6" component="div">
              {prod.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prod.description.substring(0, 215) + " ... "}
            </Typography>
          </CardContent>
          <CardActions className="justify-center ">
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary" variant="outlined">
                <Link
                  to={
                    !isBest
                      ? `product/${prod._id}`
                      : `${prod.category}/product/${prod._id}`
                  }
                >
                  Details
                </Link>
              </Button>
            </ThemeProvider>

            {/* <ThemeProvider theme={theme}>
              <Button
                size="small"
                endIcon={<AddShoppingCartIcon />}
                onClick={() => {
                  dispatch(ADD_TO_CART(prod));
                  setChecked(true);
                }}
                variant={checked ? "contained" : "outlined"}
                color={checked ? "neutral" : "primary"}
              >
                {checked ? "In Cart" : "Add to cart"}
              </Button>
            </ThemeProvider> */}
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};

export default ProductCard;
