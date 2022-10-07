import dbConnect from "../lib/dbConnect";
import Product from "../models/Product";

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate("category");

  const sanitizedProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category.name,
  }));

  return sanitizedProducts;
}

export async function getProductById(id) {
  await dbConnect();

  const product = await Product.findById(id).populate("category");

  const sanitizedProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category.name,
  };

  return sanitizedProduct;
}
