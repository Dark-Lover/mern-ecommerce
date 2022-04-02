import React from "react";
import { Link } from "react-router-dom";
//prettier-ignore
import {
  Grid,Card,CardContent,CardMedia,CardActions,Typography,Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ prod, isBest }) => {
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
            <Button size="small" color="error">
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
            <Button size="small" endIcon={<AddShoppingCartIcon />}>
              Add to cart
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};

export default ProductCard;
