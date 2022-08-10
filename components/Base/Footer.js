import { Fragment } from "react";
import "../../styles/Home.module.scss";
import "../../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer({ children }) {
  const newDate = new Date();
  const currentDate = newDate.getFullYear();

  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="about">
            <h4 className="heading4">A propos</h4>
            <p>
              Passionné par les nouvelles technologies. Mes premières
              expériences en tant que développeur remontent à 2008. Je me suis
              formé en autodidacte sur le &quot;site du zéro&quot; qui est
              devenu OpenClassRooms. D&apos;abord en apprenant HTML et CSS. Puis
              c&apos;est en 2016 que j&apos;ai appris PHP et MySQL. Cet
              apprentissage m&apos;a permis de créer mon premier site internet
              personnel. En 2021 j&apos;ai décidé de me former pour devenir
              développeur/intégrateur web notamment sur Javascript, ReactJS et
              NodeJS.
            </p>
          </div>
          <div className="socials">
            <h4 className="heading4">Réseaux Sociaux</h4>
            <ul>
              <li>
                <a href="https://github.com/Hoggy06">
                  <FontAwesomeIcon icon={faGithub} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tourniermaxime/">
                  <FontAwesomeIcon icon={faLinkedin} className="icons" />
                </a>
              </li>
            </ul>
          </div>
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
