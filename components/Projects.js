import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects({ data, language }) {
  return (
    <Fragment>
      <section className="heroProjects" id="projects">
        <div className="heroProjects__content">
          {data[language].map((i, key) => (
            <Fragment key={key}>
              <h3 className="heading3">{i.realisation.title}</h3>
              <span className="subHeading">{i.realisation.intro}</span>
              <div className="container">
                {i.realisation.projects.map((j, key) => (
                  <Fragment key={key}>
                    <div className="container__left">
                      <Image
                        src={`/assets/images/${j.image}.png`}
                        alt={j.name}
                        height={j.height}
                        width={j.width}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="container__right">
                      <h4 className="heading4">{j.name}</h4>
                      <p>{j.description}</p>
                      <Link href={`/${j.id}`}>
                        <a className="btn">{j.more}</a>
                      </Link>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .heroProjects__content .container {
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: normal;
            justify-content: normal;
            align-items: center;
            display: flex;
          }
          .heroProjects__content .container__left {
            width: 80%;
            height: auto;
          }
          .heroProjects__content .container__right {
            width: 50%;
            height: auto;
          }
        }
        @media screen and (max-width: 768px) {
          .heroProjects__content .container__right {
            width: 90%;
            height: auto;
          }
        }
      `}</style>
    </Fragment>
  );
}
