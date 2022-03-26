import React from "react";
//prettier-ignore
import {
  Grid,Card,CardContent,CardMedia,CardActions,Typography,Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ prod }) => {
  return (
    <Grid item xs={12} sm={6} md={4} className="flex justify-center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={prod.image}
          alt="green iguana"
          className="max-h-60 object-contain"
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="h6" component="div">
            {prod.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prod.description}
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
