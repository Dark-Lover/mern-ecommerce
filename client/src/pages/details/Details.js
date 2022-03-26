import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductList from "../../components/productList/ProductList";
import HeaderContainer from "../../containers/HeaderContainer";
import { getCatProductsAPI } from "../../api/axiosRequests";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_CAT_PRODUCTS, TURNOFFCAT } from "./../../api/productsFeatures";
const Details = () => {
  const category = useParams();
  const { catData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("WE ARE FETCHING CAT");

    getCatProductsAPI(category.category).then((res) => {
      dispatch(FETCH_CAT_PRODUCTS(res));
      console.log("new cat data: ", res);
    });
  }, [category.category]);
  return (
    <section>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ProductList cat={category.category} />
      <FooterSection />
    </section>
  );
};

export default Details;
