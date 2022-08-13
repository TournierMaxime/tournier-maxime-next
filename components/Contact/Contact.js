import Link from "next/link";
import React, { useState } from "react";
import { regexName, regexEmail } from "../Functions/regex";

export default function Contact({ data }) {
  const [datas, setDatas] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setDatas({
      ...datas,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: datas.name,
      email: datas.email,
      message: datas.message,
    };
    fetch(`http://195.179.193.97:3005/api/contact`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((res) => {
        setSuccess(res.message);
        if (res.error) {
          setError(res.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setError("");
    setSuccess("");
  };
  return (
    <section className="heroContact" id="contact">
      <div className="heroContact__content">
        <h3 className="heading3">Contact</h3>
        <span className="subHeading">{data.contact.intro}</span>
        <form onSubmit={handleSubmit} className="container">
          <div className="field">
            <label>Nom</label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Votre nom"
              onChange={handleChange}
              value={datas.name}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Votre email"
              onChange={handleChange}
              value={datas.email}
            />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              className="textarea"
              name="message"
              placeholder="Votre message"
              onChange={handleChange}
              value={datas.message}
            ></textarea>
          </div>
          <div className="field">
            <button className="btn" type="submit">
              Envoyer
            </button>
          </div>
          {error ? (
            <div className="field">
              <p className="message" style={{ color: "red" }}>
                {error}
              </p>
            </div>
          ) : null}
          {success ? (
            <div className="field">
              <p className="message" style={{ color: "green" }}>
                {success}
              </p>
            </div>
          ) : null}
        </form>
      </div>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .heroContact__content .container {
            width: 90%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
