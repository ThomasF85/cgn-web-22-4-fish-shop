import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList";
import { getAllProducts } from "../../services/productService";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products: products },
  };
}

export default function Products({ products }) {
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
    </>
  );
}
