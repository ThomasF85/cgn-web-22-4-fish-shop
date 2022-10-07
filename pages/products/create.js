import { useRouter } from "next/router";
import ProductForm from "../../components/ProductForm";
import { getAllCategories } from "../../services/categoryService";

export async function getServerSideProps() {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function CreateProduct({ categories }) {
  const router = useRouter();

  async function handleSubmit(data) {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      router.push(`/products/${result.createdId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Produkt hinzufügen</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        buttonLabel="hinzufügen"
      />
    </>
  );
}
