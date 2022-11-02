import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Button from "../components/Button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dein Fische Shop</title>
      </Head>
      <h1>Fische Shop</h1>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
      <Background>
        <Image
          src="https://unsplash.com/photos/9y7y26C-l4Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5MjcwNjYw&force=true&w=2400"
          alt="Schöne Fische"
          layout="responsive"
          width={2400}
          height={1800}
        />
      </Background>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;

  @media (max-width: 600px) {
    display: none;
  }
`;
