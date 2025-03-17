const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kshitiz23kumar@gmail.com",
    pass: "vsor itoa oayu yzvq", // 🔥 Use your generated App Password here
  },
});
