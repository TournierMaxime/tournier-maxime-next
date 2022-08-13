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
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LanguageContext } from "./_app";
export default function Home({ data }) {
  const { language } = useContext(LanguageContext);
  return (
    <Fragment>
      <Intro data={data} language={language} />

      {/*<About data={data} />

      <Projects data={data} />


      <Career data={data} />

  <Contact data={data} />*/}
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
