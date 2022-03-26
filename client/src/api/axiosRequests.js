import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1/products",
});

export const getAllProductsAPI = async () => {
  try {
    const products = await instance.get("/");
    return products.data.products;
  } catch (err) {
    throw err;
  }
};

export const getCatProductsAPI = async (cat) => {
  try {
    const products = await instance.get(`/${cat}`);
    return products.data.products;
  } catch (err) {
    throw err;
  }
};
