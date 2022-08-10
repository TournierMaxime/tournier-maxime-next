import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "../../public/assets/images/logo_TM_2.png";
import { useState, Fragment, useNavigate } from "react";
import Image from "next/image";
import "../../styles/Navbar.module.scss";
import "../../styles/Buttons.module.scss";
import { useRouter } from "next/router";
export default function Nav({ children }) {
  const router = useRouter();
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
                <a className="navbarLinkBurger">A Propos</a>
              </Link>
            </li>
            <li>
              <Link href={"/#projects"}>
                <a className="navbarLinkBurger">Projets</a>
              </Link>
            </li>
            <li>
              <Link href={"/#career"}>
                <a className="navbarLinkBurger">Parcours</a>
              </Link>
            </li>
            <li>
              <Link href={"/#contact"}>
                <a className="navbarLinkBurger">Contact</a>
              </Link>
            </li>
            <li>
              <a
                className="navbarLinkBurger"
                href={"https://github.com/Hoggy06"}
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="navbarLinkBurger"
                href={"https://www.linkedin.com/in/maxime-tournier-523820113/"}
              >
                Linkedin
              </a>
            </li>
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

              <Link href={"/#about"}>
                <a className="navLink">A Propos</a>
              </Link>
              <Link href={"/#projects"}>
                <a className="navLink">Projets</a>
              </Link>
              <Link href={"/#career"}>
                <a className="navLink">Parcours</a>
              </Link>
              <Link href={"/#contact"}>
                <a className="navLink">Contact</a>
              </Link>
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
