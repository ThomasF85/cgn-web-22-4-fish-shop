import { useRouter } from "next/router";
import ProductForm from "../../../components/ProductForm";
import { getAllCategories } from "../../../services/categoryService";
import { getProductById } from "../../../services/productService";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getProductById(id);
  const categories = await getAllCategories();

  return {
    props: { product, categories },
  };
}

export default function Product({ product, categories }) {
  const router = useRouter();

  async function handleSubmit(data) {
    const response = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    await response.json();

    router.push(`/products/${product.id}`);
  }

  return (
    <>
      <h1>Produkt bearbeiten</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        product={product}
        buttonLabel="bearbeiten"
      />
    </>
  );
}
