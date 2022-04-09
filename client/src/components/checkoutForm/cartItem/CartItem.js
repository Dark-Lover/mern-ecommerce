import React from "react";

//prettier-ignore
import {  Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { DELETE_FROM_CART } from "./../../../api/cartFeatures";

const useStyles = makeStyles((theme) => ({
  delete: {
    color: "#e32e00",
  },
}));

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card xs={12} className="mb-2 shadow-none border-b-2 border-light_gray">
      <CardActionArea className="flex px-4 justify-start">
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
          className="w-20 h-20 object-contain"
        />
        <CardContent className="py-1">
          <Typography
            gutterBottom
            variant="body2"
            component="h6"
            className="font-bold"
          >
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className=" py-1 flex justify-around">
        <Box className="flex w-24">
          <Typography variant="body1" component="div" className="font-bold">
            ${item.price}
          </Typography>
          <Typography variant="body1" component="div" className="ml-1">
            x {item.qty}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          className="font-bold flex-grow"
        >
          Total:{" "}
          <span className="font-bold text-textTest">
            ${item.price * item.qty}
          </span>
        </Typography>
        <IconButton
          color="primary"
          aria-label="delete"
          className={classes.delete}
          size="small"
          onClick={() => dispatch(DELETE_FROM_CART(item))}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
