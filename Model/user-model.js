import mongoose, { Schema } from "mongoose";

const ProductsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export const ProductModel =
  mongoose.models.Products ?? mongoose.model("Products", ProductsSchema);
