"use strict";
const nodemailer = require("nodemailer");

const sendEmail = (receiver) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: "Tamermansor371@gmail.com",
      pass: "nqtsykesjfdovain",
    },
  });
  const mailOptions = {
    from: "Tamermansor371@gmail.com",
    to: receiver,
    subject: "Welcome",
    text: ` Welcome to Ketabk 
    
          we are happy to see you here we hope you will find what you want 

          if you find anu issue we hope you contact as at Tamermansor371@gmail.com
          
          you can know more about us from this link https://ketabk.onrender.com/about`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = { sendEmail };
