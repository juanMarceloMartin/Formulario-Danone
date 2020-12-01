const fs = require("fs");
const nodemailer = require("nodemailer");

const sendEmail = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "testiagotesting@gmail.com",
      pass: "Testiago_testing",
    },
  });

  const mailOptions = {
    from: "testiagotesting@gmail.com",
    to: "lucas.pesse@terrand-audits.com",
    subject: "Usuarios registrados",
    html: "<p>Lista de usuarios registrados adjuntada en archivo excel.</p>",
    // Attachment path
    attachments: [
      { filename: "Excel.xlsx", content: fs.createReadStream("./Excel.xlsx") },
    ],
  };
  console.log(mailOptions);
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar mail: " + error);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
