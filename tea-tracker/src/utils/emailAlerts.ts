import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

// 🔴 Hardcoded Gmail Credentials (Security Risk)
const EMAIL_USER = "kshitiz23kumar@gmail.com";  
const EMAIL_PASS = "jkak vxbi jiat iwdi"; // Replace with your actual App Password

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// 🚀 Function to send a **Reminder Email** (for daily tracking)
export const sendReminderEmail = functions.https.onRequest(async (req, res) => {
  try {
    const recipientEmail = "ayraoffclx@gmail.com";  

    await transporter.sendMail({
      from: `"Tea Tracker" <${EMAIL_USER}>`,
      to: recipientEmail,
      subject: "🫖 Tea Consumption Reminder",
      text: "📅 Don't forget to update your tea checklist today!",
    });

    console.log("✅ Reminder email sent successfully!");
    res.status(200).send({ success: true, message: "Reminder email sent!" });
  } catch (error) {
    console.error("❌ Error sending reminder email:", error);
    res.status(500).send({ success: false, error: (error as Error).message });
  }
});

// 🚀 Function to send an **Alert Email** (when tea limit is exceeded)
export const sendAlertEmail = functions.https.onRequest(async (req, res) => {
  try {
    const recipientEmail = "kshitiz23kumar@gmail.com";  

    await transporter.sendMail({
      from: `"Tea Tracker" <${EMAIL_USER}>`,
      to: recipientEmail,
      subject: "🚨 Tea Consumption Limit Exceeded!",
      text: "⚠ Alert: You have exceeded your tea consumption limit!",
    });

    console.log("✅ Alert email sent successfully!");
    res.status(200).send({ success: true, message: "Alert email sent!" });
  } catch (error) {
    console.error("❌ Error sending alert email:", error);
    res.status(500).send({ success: false, error: (error as Error).message });
  }
});