import mongoose from "mongoose";
import "./Category";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
