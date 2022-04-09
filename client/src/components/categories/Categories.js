import React from "react";
import Category from "./category/Category";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//prettier-ignore
import {
   Container, Typography
} from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import loading from "./../../assets/loading.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./../../customSwiper.css";

const Categories = () => {
  const theme = useTheme();
  const downToSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upToMd = useMediaQuery(theme.breakpoints.up("md"));
  const { data } = useSelector((state) => state.products);
  const uniqueCat = new Set(data.map((el) => el.category));
  const catArr = [...uniqueCat];

  return (
    <Container className="mt-12">
      <Typography
        variant="h6"
        component="h2"
        className="text-center text-primary mb-4"
      >
        Our Categories
      </Typography>
      <Swiper
        // install Swiper modules
        className="max-w-4xl p-2 "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={downToSm ? 1 : upToMd ? 3 : 2}
        navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {catArr.length !== 0 ? (
          catArr.map((el) => (
            <SwiperSlide className="flex justify-center" key={el}>
              <Category cat={el} />
            </SwiperSlide>
          ))
        ) : (
          <img src={loading} alt="Loading" className="my-12 m-auto" />
        )}
      </Swiper>
    </Container>
  );
};

export default Categories;
