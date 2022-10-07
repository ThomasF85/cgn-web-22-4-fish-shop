import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import { getAllProducts } from "../../../services/productService";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const products = await getAllProducts();
    return response.status(200).json(products);
  } else if (request.method === "POST") {
    await dbConnect();

    const postData = JSON.parse(request.body);
    const newProduct = await Product.create(postData);

    return response
      .status(201)
      .json({ message: "Product created", createdId: newProduct.id });
  }

  return response.status(405).json({ message: "HTTP method is not allowed" });
}
