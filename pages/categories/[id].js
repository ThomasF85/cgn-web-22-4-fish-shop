import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Kategorie {id}</h1>;
}
