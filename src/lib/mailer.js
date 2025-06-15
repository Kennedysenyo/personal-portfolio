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
    if (!info.messageId) throw new Error("Message sending Failed");
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    console.error(error);
    return error.toString();
  }
};
