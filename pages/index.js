import { Fragment } from "react";
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
export default function Home({ data }) {
  return (
    <Fragment>
      <Intro data={data} />
      {/*<AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn"></AnimationOnScroll>*/}
      <About data={data} />
      {/*<AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp"></AnimationOnScroll>*/}
      <Projects data={data} />

      {/*<AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp"></AnimationOnScroll>*/}
      <Career data={data} />

      <Contact data={data} />
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
