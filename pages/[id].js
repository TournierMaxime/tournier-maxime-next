import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "./_app";
import Nav from "../components/Base/Nav";
import Footer from "../components/Base/Footer";
export default function Project({ data }) {
  const { language } = useContext(LanguageContext);
  return (
    <Fragment>
      <Fragment>
        <section className="heroIntro">
          <div className="heroIntro__content">
            <h1 className="heading1">{data[language].name}</h1>
            <p>{data[language].description}</p>
            <div className="links">
              {data[language].github ? (
                <a
                  href={data[language].github}
                  className="btn"
                  style={{ margin: "0 1em" }}
                >
                  Github
                </a>
              ) : null}
              {data[language].website ? (
                <a
                  href={data[language].website}
                  className="btn"
                  style={{ margin: "0 1em" }}
                >
                  Website
                </a>
              ) : null}
            </div>
          </div>
        </section>
        <section className="heroProject">
          <div className="heroProject__content">
            <div className="container">
              <div className="container__left">
                <Image
                  src={`/../public/assets/images/${data[language].image}.png`}
                  alt={data[language].name}
                  height={data[language].height}
                  width={data[language].width}
                  layout="intrinsic"
                />
              </div>
              <div className="container__right">
                <h4 className="heading4">{data[language].skillTitle}</h4>
                <ul>
                  {data[language].skills.map((i, key) => (
                    <li key={key}>{i}</li>
                  ))}
                </ul>
                <h4 className="heading4">{data[language].toolsUsed}</h4>
                <div className="techs">
                  {data[language].tech.map((i, key) => (
                    <span key={key}>{i.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>

      <style jsx>{`
        @media screen and (min-width: 320px) and (max-width: 425px) {
          .heading1 {
            font-size: 1.6em;
          }
        }
        @media screen and (max-width: 768px) and (min-width: 426px) {
          .heading1 {
            font-size: 2.2em;
          }
        }
        @media screen and (max-width: 1024px) {
          .heroIntro__content p {
            width: 80%;
          }
          .container__left {
            width: 80%;
          }
        }
      `}</style>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(`${process.env.DOMAIN_NAME}/api/data/${id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.DOMAIN_NAME}/api/data`);

  const data = await response.json();

  const id = data[0].map((i) =>
    i.realisation.projects.map((j) => ({ id: j.id.toString() }))
  );

  const newArray = id.find((i) => i);

  const paths = newArray.map((i) => ({
    params: { id: i.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
