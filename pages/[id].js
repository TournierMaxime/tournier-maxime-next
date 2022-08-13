import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "./_app";
export default function Project({ data }) {
  const { language } = useContext(LanguageContext);
  return (
    <Fragment>
      <section className="heroIntro">
        <div className="heroIntro__content">
          <h1 className="heading1">{data.name}</h1>
          <p>{data.description}</p>
          <div className="links">
            {data.github ? (
              <a href={data.github} className="btn" style={{ margin: "0 1em" }}>
                Github
              </a>
            ) : null}
            {data.website ? (
              <a
                href={data.website}
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
                src={`/../public/assets/images/${data.image}.png`}
                alt={data.name}
                height={data.height}
                width={data.width}
              />
            </div>
            <div className="container__right">
              <h4 className="heading4">Skills</h4>
              <ul>
                {data.skills.map((i, key) => (
                  <li key={key}>{i}</li>
                ))}
              </ul>
              <h4 className="heading4">Technologies utilisées</h4>
              <div className="techs">
                {data.tech.map((i, key) => (
                  <span key={key}>{i.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
  const paths = data[language].realisation.projects.map((i) => ({
    params: { id: i.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
