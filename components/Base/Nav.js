import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "../../public/assets/images/logo_TM_2.png";
import { useState, Fragment, useContext } from "react";
import Image from "next/image";
import "../../styles/Navbar.module.scss";
import "../../styles/Buttons.module.scss";
import { LanguageContext } from "../../pages/_app";
import { useRouter } from "next/router";
export default function Nav({ children, data, dataLoaded, language }) {
  const { toogleLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const pathname = router.asPath;
  const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!burger);
  };
  return (
    <Fragment>
      {burger ? (
        <header className="header--isActive">
          <nav className="navbar">
            <div className="navLeft">
              <Link href="/">
                <a>
                  <Image
                    width={48}
                    height={48}
                    className="logo"
                    src={Logo}
                    alt="Logo"
                    layout="fixed"
                  />
                </a>
              </Link>
            </div>
            <div className="navRight">
              <FontAwesomeIcon
                className="burger"
                icon={faXmark}
                onClick={handleBurger}
              />
            </div>
          </nav>

          <ul className="ulBurger">
            <li>
              <Link href={`/#about`}>
                <a onClick={handleBurger} className="navbarLinkBurger">
                  A Propos
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/#projects"}>
                <a onClick={handleBurger} className="navbarLinkBurger">
                  Projets
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/#career"}>
                <a onClick={handleBurger} className="navbarLinkBurger">
                  Parcours
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/#contact"}>
                <a onClick={handleBurger} className="navbarLinkBurger">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <a
                onClick={handleBurger}
                className="navbarLinkBurger"
                href={"https://github.com/Hoggy06"}
              >
                Github
              </a>
            </li>
            <li>
              <a
                onClick={handleBurger}
                className="navbarLinkBurger"
                href={"https://www.linkedin.com/in/maxime-tournier-523820113/"}
              >
                Linkedin
              </a>
            </li>
            {language === 0 ? (
              <Link href={pathname}>
                <li onClick={handleBurger}>
                  <a className="navbarLinkBurger" onClick={toogleLanguage}>
                    EN
                  </a>
                </li>
              </Link>
            ) : (
              <Link href={pathname}>
                <li onClick={handleBurger}>
                  <a className="navbarLinkBurger" onClick={toogleLanguage}>
                    FR
                  </a>
                </li>
              </Link>
            )}
          </ul>
        </header>
      ) : (
        <header className="header">
          <nav className="navbar">
            <div className="navLeft">
              <Link href="/">
                <a>
                  <Image
                    width={48}
                    height={48}
                    className="logo"
                    src={Logo}
                    alt="Logo"
                    layout="fixed"
                  />
                </a>
              </Link>
            </div>
            <div className="navRight">
              <FontAwesomeIcon
                className="burger"
                icon={faBars}
                onClick={handleBurger}
              />
              {dataLoaded
                ? null
                : data[language].map((i, key) => (
                    <Fragment key={key}>
                      <Link href={"/#about"}>
                        <a className="navLink">{i.nav.link_1}</a>
                      </Link>
                      <Link href={"/#projects"}>
                        <a className="navLink">{i.nav.link_2}</a>
                      </Link>
                      <Link href={"/#career"}>
                        <a className="navLink">{i.nav.link_3}</a>
                      </Link>
                      <Link href={"/#contact"}>
                        <a className="navLink">{i.nav.link_4}</a>
                      </Link>
                    </Fragment>
                  ))}
              {language === 0 ? (
                <Link href={pathname}>
                  <a className="navLink" onClick={toogleLanguage}>
                    EN
                  </a>
                </Link>
              ) : (
                <Link href={pathname}>
                  <a className="navLink" onClick={toogleLanguage}>
                    FR
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>
      )}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .header {
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: normal;
            justify-content: normal;
            align-items: center;
            display: flex;
          }
          .header .navbar .navRight {
            margin: 0 1em;
            padding: 0;
          }
          .header--isActive .navbar .navRight {
            margin: 0 1em;
            padding: 0;
          }
          .navLink {
            display: none;
          }
        }
        @media screen and (min-width: 769px) {
          .navRight {
            margin: 0 1em;
            padding: 0;
          }
          .navRight .burger {
            display: none;
          }
        }
      `}</style>
      {children}
    </Fragment>
  );
}
