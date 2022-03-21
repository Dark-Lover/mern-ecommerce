import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import hero from "./../../../assets/hero.jpg";
const Category = () => {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 250 }}>
      <CardMedia component="img" height="140" image={hero} alt="green iguana" />
      <CardContent className="text-center">
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
