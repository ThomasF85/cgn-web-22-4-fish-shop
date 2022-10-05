import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList";

export default function Categories() {
  return (
    <>
      <Head>
        <title>Fische Shop Kategorien</title>
      </Head>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <GridList>
        <li>
          <Link href="/categories/meerwasser">Meerwasser</Link>
        </li>
        <li>
          <Link href="/categories/muscheln">Muscheln</Link>
        </li>
      </GridList>
    </>
  );
}
