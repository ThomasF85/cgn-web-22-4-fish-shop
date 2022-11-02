import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import { getAllProducts } from "../../../services/productService";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await unstable_getServerSession(
    request,
    response,
    authOptions
  );

  if (request.method === "GET") {
    const products = await getAllProducts();
    return response.status(200).json(products);
  } else if (request.method === "POST") {
    if (session) {
      await dbConnect();

      const postData = JSON.parse(request.body);
      const newProduct = await Product.create(postData);

      return response
        .status(201)
        .json({ message: "Product created", createdId: newProduct.id });
    } else {
      return response.status(401).json({ message: "Unauthorized" });
    }
  }

  return response.status(405).json({ message: "HTTP method is not allowed" });
}
