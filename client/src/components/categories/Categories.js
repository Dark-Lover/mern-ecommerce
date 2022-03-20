import React from "react";
import Category from "./category/Category";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//prettier-ignore
import {
   Container
} from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./../../customSwiper.css";

const Categories = () => {
  const theme = useTheme();
  const downToSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upToMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Swiper
        // install Swiper modules
        className="max-w-4xl p-2"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={downToSm ? 1 : upToMd ? 3 : 2}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="flex justify-center">
          <Category />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Category />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Category />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Category />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Category />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Categories;