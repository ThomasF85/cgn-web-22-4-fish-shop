import dbConnect from "../lib/dbConnect";
import Category from "../models/Category";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  const sanitizedCategories = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  return sanitizedCategories;
}

export async function getCategoryById(id) {
  await dbConnect();

  const category = await Category.findById(id);

  const sanitizedCategory = {
    id: category.id,
    name: category.name,
    description: category.description,
  };

  return sanitizedCategory;
}
