import { ProductModel } from "@/Model/product-model";
import { dbConnect } from "./mongo";

export const getProducts = async () => {
  await dbConnect();
  const req = ProductModel.find().lean();
  return req;
};
