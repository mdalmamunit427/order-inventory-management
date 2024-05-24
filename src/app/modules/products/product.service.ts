import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData:TProduct) => {
    const result = await Product.create(productData);
    return result;
  };

  const getAllProductsFromDB = async (searchTerm = "") => {
    const query = searchTerm ? { name: { $regex: searchTerm, $options: "i" } } : {};
  const result = await Product.find(query);
  return result;
  };

  export const ProductDataServices = {
    createProductIntoDB,
    getAllProductsFromDB
  };