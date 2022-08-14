import React, { Fragment } from "react";
export default function About({ data, language }) {
  return (
    <Fragment>
      <section className="heroAboutMe" id="about">
        <div className="heroAboutMe__content">
          {data[language].map((i, key) => (
            <Fragment key={key}>
              <h3 className="heading3">{i.about.aboutMe}</h3>
              <span className="subHeading">{i.about.intro}</span>
              <div className="container">
                <div className="container__left">
                  <h4 className="heading4">{i.about.know}</h4>
                  <p>{i.about.text}</p>
                </div>
                <div className="container__right">
                  <h4 className="heading4">{i.about.skill}</h4>
                  <br />
                  <h5 className="heading5">Frontend</h5>
                  <ul>
                    {i.about.skills[0].frontend.map((j, key) => (
                      <li key={key}>
                        <span>{j.name}</span>
                      </li>
                    ))}
                  </ul>
                  <h5 className="heading5">Backend</h5>
                  <ul>
                    {i.about.skills[1].backend.map((j, key) => (
                      <li key={key}>
                        <span>{j.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .heroAboutMe__content .container {
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: normal;
            justify-content: normal;
            align-items: center;
            display: flex;
          }
          .container__left {
            width: 100%;
          }
          .container__right {
            width: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
}
