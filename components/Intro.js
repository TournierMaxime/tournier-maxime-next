import React, { Fragment } from "react";
import Link from "next/link";
export default function Intro({ data, language }) {
  return (
    <section className="heroIntro">
      <div className="heroIntro__content">
        {data[language].map((i, key) => (
          <Fragment key={key}>
            <h1 className="heading1">{i.intro.name}</h1>
            <h2 className="heading2">{i.intro.job}</h2>
            <p>{i.intro.text}</p>
            <Link href="/#projects">
              <a className="btn">{i.intro.btn}</a>
            </Link>
          </Fragment>
        ))}
      </div>
      <style jsx>{`
        @media screen and (max-width: 425px) {
          .heroIntro__content .heading1 {
            font-style: normal;
            font-weight: 800;
            font-size: 2em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
          .heroIntro__content .heading2 {
            font-style: normal;
            font-weight: 600;
            font-size: 1.4em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
          .heroIntro__content p {
            font-style: normal;
            font-weight: normal;
            font-size: 0.8em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
        }
        @media screen and (min-width: 426px) and (max-width: 768px) {
          .heroIntro__content .heading1 {
            font-style: normal;
            font-weight: 800;
            font-size: 2.7em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
          .heroIntro__content .heading2 {
            font-style: normal;
            font-weight: 600;
            font-size: 2em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
          .heroIntro__content p {
            font-style: normal;
            font-weight: normal;
            font-size: 1.1em;
            line-height: 1;
            font-family: Source Sans Pro;
          }
        }
      `}</style>
    </section>
  );
}
