import React, { Fragment } from "react";
export default function About({ data }) {
  return (
    <Fragment>
      <section className="heroAboutMe" id="about">
        <div className="heroAboutMe__content">
          <h3 className="heading3">{data.about.title}</h3>
          <span className="subHeading">{data.about.intro}</span>
          <div className="container">
            <div className="container__left">
              <h4 className="heading4">{data.about.know}</h4>
              <p>{data.about.text}</p>
            </div>
            <div className="container__right">
              <h4 className="heading4">{data.about.skill}</h4>
              <br />
              <h5 className="heading5">Frontend</h5>
              <ul>
                {data.about.skills[0].frontend.map((i, key) => (
                  <li key={key}>
                    <span>{i.name}</span>
                  </li>
                ))}
              </ul>
              <h5 className="heading5">Backend</h5>
              <ul>
                {data.about.skills[1].backend.map((i, key) => (
                  <li key={key}>
                    <span>{i.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
