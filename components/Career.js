import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuilding,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export default function Career({ data }) {
  return (
    <Fragment>
      <section className="heroCareer" id="career">
        <div className="heroCareer__content">
          <h3 className="heading3">{data.career.title}</h3>
          <span className="subHeading">{data.career.intro}</span>
          <div className="timeline list">
            {data.career.jobs.map((i, index) => {
              const nb = i.id;
              return (
                <div key={index}>
                  {nb % 2 === 0 ? (
                    <div className="timeline__container left">
                      <div className="timeline__container--content">
                        <h6 className="heading6">{i.period}</h6>
                        <ul className="timeline__List">
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faBriefcase} />
                              {i.job}
                            </span>
                          </li>
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faBuilding} />
                              {i.company}
                            </span>
                          </li>
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faLocationDot} />
                              {i.location}
                            </span>
                          </li>
                        </ul>

                        <p className="timeline__P pJustify">{i.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="timeline__container right">
                      <div className="timeline__container--content">
                        <h6 className="heading6">{i.period}</h6>
                        <ul className="timeline__List">
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faBriefcase} />
                              {i.job}
                            </span>
                          </li>
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faBuilding} />
                              {i.company}
                            </span>
                          </li>
                          <li className="timeline__List--Item">
                            <span className="timeline__SubHeading">
                              <FontAwesomeIcon icon={faLocationDot} />
                              {i.location}
                            </span>
                          </li>
                        </ul>
                        <p className="timeline__P pJustify">{i.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .timeline {
            margin: 0;
            max-width: 1024px;
          }
          /* Place the timelime to the left */
          .timeline::after {
            left: 31px;
          }
          /* Full-width containers */
          .timeline__container {
            width: 80vw;
            padding-left: 70px;
            padding-right: 25px;
          }
          /* Make sure that all arrows are pointing leftwards */
          .timeline__container::before {
            left: 60px;
            border: medium solid rgb(98, 250, 214);
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
          }
          /* Make sure all circles are at the same spot */
          .left::after,
          .right::after {
            left: 19px;
          }
          /* Make all right containers behave like the left ones */
          .right {
            left: 0%;
          }
        }
      `}</style>
    </Fragment>
  );
}
