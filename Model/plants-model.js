import mongoose, { Schema } from "mongoose";

const plantsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  shippingTax: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  status: {
    type: Number,
    required: false,
    min: 0,
    max: 100,
  },
  reviews: {
    type: [mongoose.ObjectId],
    required: false,
  },
  tags: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
});

export const plantsModel =
  mongoose.models.plants ?? mongoose.model("plants", plantsSchema);
