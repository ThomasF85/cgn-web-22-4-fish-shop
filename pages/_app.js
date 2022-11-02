import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
