import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList";

export default function Products() {
  return (
    <>
      <Head>
        <title>Fische Shop Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <GridList>
        <li>
          <Link href="/products/1">Guppy</Link>
        </li>
        <li>
          <Link href="/products/2">Regenbogenfisch</Link>
        </li>
      </GridList>
    </>
  );
}
