import { Fragment, useContext } from "react";
import "../styles/Buttons.module.scss";
import "../styles/Footer.module.scss";
import "../styles/Heros.module.scss";
import "../styles/Home.module.scss";
import "../styles/Timeline.module.scss";
import "../styles/Titles.module.scss";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Contact from "../components/Contact/Contact";
import Nav from "../components/Base/Nav";
import Footer from "../components/Base/Footer";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LanguageContext } from "./_app";
export default function Home({ data }) {
  const { language, toogleLanguage } = useContext(LanguageContext);
  return (
    <Fragment>
      <Nav data={data} language={language} toogleLanguage={toogleLanguage} />

      <Intro data={data} language={language} />

      <About data={data} language={language} />

      <Projects data={data} language={language} />

      <Career data={data} language={language} />

      <Contact data={data} language={language} />

      <Footer data={data} language={language} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.DOMAIN_NAME}/api/data`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
