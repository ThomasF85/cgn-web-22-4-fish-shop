import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dein Fische Shop</title>
      </Head>
      <h1>Fische Shop</h1>
      <p>Log dich ein</p>
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
