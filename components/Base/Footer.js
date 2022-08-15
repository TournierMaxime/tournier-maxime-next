import { Fragment } from "react";
import "../../styles/Home.module.scss";
import "../../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ children, data, dataLoaded, language }) {
  const newDate = new Date();
  const currentDate = newDate.getFullYear();

  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          {dataLoaded
            ? null
            : data[language].map((i, key) => (
                <Fragment key={key}>
                  <div className="about">
                    <h4 className="heading4">{i.about.aboutMe}</h4>
                    <p>{i.about.text}</p>
                  </div>
                  <div className="socials">
                    <h4 className="heading4">{i.about.socialNetworks}</h4>
                    <ul>
                      <li>
                        <a href="https://github.com/Hoggy06">
                          <FontAwesomeIcon icon={faGithub} className="icons" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/tourniermaxime/">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="icons"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Fragment>
              ))}
        </div>

        <span>&copy; {currentDate} Made by Tournier Maxime</span>
      </footer>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .footer {
            width: 100%;
            height: auto;
          }
          .footer .container {
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: normal;
            justify-content: normal;
            align-items: flex-start;
            display: flex;
          }
          .footer .container .about {
            width: 90%;
            height: auto;
            margin: 0 1em;
          }
          .footer .container .socials {
            width: 90%;
            height: auto;
            margin: 0 1em;
          }
        }
      `}</style>
      {children}
    </Fragment>
  );
}
