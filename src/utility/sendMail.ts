import { createTransport } from "nodemailer";

export const sendMail = async (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> => {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  // ❌ Env missing
  if (!user || !pass) {
    return {
      status: 500,
      message: "Email service not configured",
    };
  }

  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"Saifulla Tanim – Portfolio" <${user}>`,
      to: user, // email will come to your inbox
      replyTo: email !== "SELF" ? email : user,
      subject: `Portfolio Contact: ${subject || "New Message"}`,
      text: `
Name: ${name}
Email: ${email !== "SELF" ? email : "Not provided"}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      status: 200,
      message: "Mail sent successfully",
    };
  } catch (error) {
    console.error("sendMail error:", error);

    return {
      status: 500,
      message: "Failed to send mail",
    };
  }
};
