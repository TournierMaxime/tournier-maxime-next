import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuilding,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export default function Career({ data, language }) {
  return (
    <Fragment>
      <section className="heroCareer" id="career">
        <div className="heroCareer__content">
          {data[language].map((i, key) => (
            <Fragment key={key}>
              <h3 className="heading3">{i.career.title}</h3>
              <span className="subHeading">{i.career.intro}</span>
              <div className="timeline list">
                {i.career.jobs.map((j, index) => {
                  const nb = j.id;
                  return (
                    <div key={index}>
                      {nb % 2 === 0 ? (
                        <div
                          className="timeline__container left"
                          style={{ width: "60%" }}
                        >
                          <div className="timeline__container--content">
                            <h6 className="heading6">{j.period}</h6>
                            <ul className="timeline__List">
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faBriefcase} />
                                  {j.job}
                                </span>
                              </li>
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faBuilding} />
                                  {j.company}
                                </span>
                              </li>
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faLocationDot} />
                                  {j.location}
                                </span>
                              </li>
                            </ul>
                            <ul style={{ margin: "0", padding: "0" }}>
                              {j.description.map((k, index) => (
                                <li key={index}>
                                  <p className="timeline__P pJustify">
                                    {k.text}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="timeline__container right"
                          style={{ width: "60%" }}
                        >
                          <div className="timeline__container--content">
                            <h6 className="heading6">{j.period}</h6>
                            <ul className="timeline__List">
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faBriefcase} />
                                  {j.job}
                                </span>
                              </li>
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faBuilding} />
                                  {j.company}
                                </span>
                              </li>
                              <li className="timeline__List--Item">
                                <span className="timeline__SubHeading">
                                  <FontAwesomeIcon icon={faLocationDot} />
                                  {j.location}
                                </span>
                              </li>
                            </ul>
                            <ul style={{ margin: "0", padding: "0" }}>
                              {j.description.map((k, index) => (
                                <li key={index}>
                                  <p className="timeline__P pJustify">
                                    {k.text}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Fragment>
          ))}
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
        @media screen and (min-width: 1024px) {
          .left {
            left: -11.5em;
          }
        }
      `}</style>
    </Fragment>
  );
}
