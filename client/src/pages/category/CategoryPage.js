import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterSection from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductList from "../../components/productList/ProductList";
import HeaderContainer from "../../containers/HeaderContainer";
import { getCatProductsAPI } from "../../api/axiosRequests";
import { useDispatch } from "react-redux";
import { FETCH_CAT_PRODUCTS } from "../../api/productsFeatures";
const CategoryPage = () => {
  const category = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getCatProductsAPI(category.category).then((res) => {
      dispatch(FETCH_CAT_PRODUCTS(res));
    });
  }, [category.category]);
  return (
    <section className="min-h-screen flex flex-col ">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <div className=" flex-grow ">
        <ProductList cat={category.category} />
      </div>
      <FooterSection />
    </section>
  );
};

export default CategoryPage;
