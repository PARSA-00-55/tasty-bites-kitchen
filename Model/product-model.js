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
  rating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercent: {
    type: Number,
    required: false,
    min: 0,
    max: 100,
  },
  sizes: {
    type: [String],
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  tags: {
    type: [String],
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
});

export const ProductModel =
  mongoose.models.Products ?? mongoose.model("Products", ProductsSchema);
