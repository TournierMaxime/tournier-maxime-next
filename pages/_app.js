import { Fragment, useContext, useState } from "react";
import "../styles/globals.css";
import Nav from "../components/Base/Nav";
import Footer from "../components/Base/Footer";
import Head from "next/head";
import { createContext } from "react";
export const LanguageContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState(0);
  const toogleLanguage = () => {
    setLanguage((l) => (l === 0 ? 1 : 0));
  };
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <LanguageContext.Provider value={{ language, toogleLanguage }}>
        <Nav />
        <Component
          {...pageProps}
          language={language}
          toogleLanguage={toogleLanguage}
        />
        <Footer />
      </LanguageContext.Provider>
    </Fragment>
  );
}

export default MyApp;
