import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Anchor from "../../components/Anchor";
import GridList from "../../components/GridList";
import { getAllProducts } from "../../services/productService";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products: products },
  };
}

export default function Products({ products }) {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Fische Shop Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <GridList>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </GridList>
      {session && (
        <Link href={`/products/create`} passHref>
          <Anchor>Produkt hinzufügen</Anchor>
        </Link>
      )}
    </>
  );
}
