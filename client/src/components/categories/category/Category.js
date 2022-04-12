import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    outline: "none",
    textAlign: "center",
    height: "30px",
    padding: "0px 25px",
    color: "#7368b6",
    cursor: "pointer",
  },
});

const Category = ({ cat }) => {
  const classes = useStyles();
  const fixedCat =
    cat === "women's clothing"
      ? "women"
      : cat === "men's clothing"
      ? "men"
      : cat;
  return (
    <Card>
      {/* <CardMedia component="img" height="140" image={hero} alt="green iguana" /> */}
      <CardContent className={classes.root}>
        <Link to={fixedCat}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            className="capitalize"
          >
            {cat}
          </Typography>
        </Link>

        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default Category;
