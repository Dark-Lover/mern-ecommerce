import React from "react";
import { Box, Typography, Button } from "@mui/material";
import hero from "./../../assets/hero.jpg";
const HeroSection = () => {
  return (
    <main>
      <Box className="bg-light_gray px-12 py-4 flex justify-center text-center font-semibold">
        <Typography variant="body2">
          Free shipping on all orders over 200$
        </Typography>
      </Box>
      <div className="relative flex justify-center items-center h-full ">
        <div className="absolute w-full h-full bg-black_tra "></div>
        <img src={hero} alt="hero" className="w-full max-h-80 object-cover" />
        <Box className="absolute  mx-12 my-8 text-white">
          <Typography variant="h6" className="text-center">
            Products made to make everyone happy
          </Typography>
          <Typography variant="body2" className="text-center">
            Find what you need
          </Typography>
          <Button
            variant="outlined"
            className=" w-full rounded-none mt-4 border-white border-2 text-white"
          >
            Shop
          </Button>
        </Box>
      </div>
    </main>
  );
};

export default HeroSection;
