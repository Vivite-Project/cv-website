import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

import TemplateContact from "@/components/organisms/emails/template-contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const emailFrom = process.env.RESEND_FROM || "";
  const emailTo = process.env.ADMIN_EMAIL || "";

  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        error:
          "Missing required fields: " +
          (!firstName ? "firstName " : "") +
          (!lastName ? "lastName " : "") +
          (!email ? "email " : "") +
          (!message ? "message " : ""),
      });
    }

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      subject: "[ViviteProject] Nouvelle prise de contact",
      react: TemplateContact(req.body),
    });

    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
