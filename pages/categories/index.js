import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList";
import { getAllCategories } from "../../services/categoryService";

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: { categories: categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <Head>
        <title>Fische Shop Kategorien</title>
      </Head>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <GridList>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </GridList>
    </>
  );
}
