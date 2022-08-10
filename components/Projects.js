import React, { Fragment } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Videotek from "../public/assets/images/Videotek.webp";
import Logo from "../public/assets/images/Reservia.png";
import Link from "next/link";
export default function Projects({ data }) {
  return (
    <Fragment>
      <section className="heroProjects" id="projects">
        <div className="heroProjects__content">
          <h3 className="heading3">{data.realisation.title}</h3>
          <span className="subHeading">{data.realisation.intro}</span>
          <div className="container">
            {data.realisation.projects.map((i, key) => (
              <Fragment key={key}>
                <div className="container__left">
                  <Image
                    src={`/../public/assets/images/${i.image}.png`}
                    alt={i.name}
                    height={i.height}
                    width={i.width}
                  />
                </div>
                <div className="container__right">
                  <h4 className="heading4">{i.name}</h4>
                  <p>{i.description}</p>
                  <Link href={`/project/${i.id}`}>
                    <a className="btn">En savoir plus</a>
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
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
