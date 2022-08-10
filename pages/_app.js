import { Fragment } from "react";
import "../styles/globals.css";
import Nav from "../components/Base/Nav";
import Footer from "../components/Base/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
