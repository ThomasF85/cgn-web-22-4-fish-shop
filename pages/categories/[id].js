import Head from "next/head";
import Link from "next/link";
import Anchor from "../../components/Anchor";
import {
  getAllCategories,
  getCategoryById,
} from "../../services/categoryService";

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const ids = categories.map((category) => category.id);

  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const category = await getCategoryById(id);

  return {
    props: { name: category.name, description: category.description },
  };
}

export default function Category({ name, description }) {
  return (
    <>
      <Head>
        <title>{`Kategorie: ${name}`}</title>
      </Head>
      <h1>Kategorie: {name}</h1>
      <p>{description}</p>
      <Link href={`/categories`} passHref>
        <Anchor>Alle Kategorien</Anchor>
      </Link>
    </>
  );
}
