import { Fragment, useState, useEffect } from "react";
import "../styles/globals.css";
import Nav from "../components/Base/Nav";
import Footer from "../components/Base/Footer";
import Head from "next/head";
import { createContext } from "react";
export const LanguageContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState(0);
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(true);
  const toogleLanguage = () => {
    setLanguage((l) => (l === 0 ? 1 : 0));
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${process.env.DOMAIN_NAME}/api/data`);
      const data = await response.json();
      if (response) {
        setDataLoaded(false);
        setData(data);
      } else {
        setDataLoaded(true);
      }
    }
    getData();
  }, []);
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <LanguageContext.Provider value={{ language, toogleLanguage }}>
        <Nav data={data} dataLoaded={dataLoaded} language={language} />
        <Component
          {...pageProps}
          language={language}
          toogleLanguage={toogleLanguage}
        />
        <Footer data={data} dataLoaded={dataLoaded} language={language} />
      </LanguageContext.Provider>
    </Fragment>
  );
}

export default MyApp;
