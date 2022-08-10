export default async function handler(req, res) {
  const dotenv = require("dotenv");
  dotenv.config();
  const nodemailer = require("nodemailer");
  if (req.method === "POST") {
    let regexName = /^[a-zA-Z\s-]{3,35}$/;
    let regexEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

    if (req.body.name == "" && req.body.email == "" && req.body.message == "") {
      return res.status(400).json({
        error: `Le formulaire est vide`,
      });
    }
    if (regexName.test(req.body.name) === false || req.body.name == "") {
      return res.status(400).json({
        error: `Merci de vérifier votre nom, 3 caractères minimum requis avec des lettres uniquement`,
      });
    }

    if (regexEmail.test(req.body.email) === false || req.body.email == "") {
      return res.status(400).json({
        error: `Erreur email non valide !`,
      });
    }

    if (req.body.message == "") {
      return res.status(400).json({
        error: `Votre message est vide`,
      });
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_PROVIDER,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });
    const mailData = {
      from: req.body.email,
      to: process.env.EMAIL_ADDRESS,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.status(200).json({
      message:
        "Votre formulaire a bien été envoyé. Pensez à vérifier vos spams si besoin.",
    });
  }
}
