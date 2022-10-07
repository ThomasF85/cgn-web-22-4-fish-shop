import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
