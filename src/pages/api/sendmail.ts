import type { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";

import { mailValidationSchema } from "@/components/contact-form/contact-form";
import { sendMail } from "@/utility/sendMail";

export type MailRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string | string[] }>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }

  try {
    const body: MailRequestBody = req.body;

    // ✅ Validation
    try {
      await mailValidationSchema.validate(body, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(422).json({
          status: 422,
          message: error.errors,
        });
      }
    }

    const { name, email, subject, message } = body;

    const response = await sendMail(name, email, subject, message);

    return res.status(response.status).json(response);
  } catch (error: any) {
    console.error("Send mail error:", error);

    return res.status(500).json({
      status: 500,
      message: "Unable to send email",
    });
  }
}
