import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kensenyocoding@gmail.com",
    pass: "ynti pmhu njlv rdld",
  },
});
export const sendEmail = async (senderName, senderEmail, message) => {
  const mailOptions = {
    from: "kensenyocoding@gmail.com",
    to: "kennedysenyo@gmail.com",
    subject: "Portfolio Message",
    html: `<p><strong>From: </strong>${senderName} (${senderEmail})</p>
  <p>${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return null;
  } catch (error) {
    console.error(error);
    return "Message sending Failed";
  }
};
