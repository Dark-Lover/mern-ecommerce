import React from "react";

//prettier-ignore
import {  Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <Card xs={12} className="mb-2 shadow-none border-b-2">
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
      <CardActions className=" py-1 flex justify-between">
        <div className="flex">
          <Typography variant="body1" component="div" className="font-bold">
            ${item.price}
          </Typography>
          <Typography variant="body1" component="div" className="ml-2">
            x {item.qty}
          </Typography>
        </div>
        <Typography variant="body1" component="div" className="font-bold">
          Total:{" "}
          <span className="font-bold text-textTest">
            ${item.price * item.qty}
          </span>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CartItem;
