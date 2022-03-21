import React from "react";
//prettier-ignore
import {
  Grid,Card,CardContent,CardMedia,CardActions,Typography,Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} className="flex justify-center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt="green iguana"
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="justify-center">
          <Button size="small" color="error">
            Details
          </Button>
          <Button size="small" endIcon={<AddShoppingCartIcon />}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
