import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import TemplateContact from "@organisms/emails/template-contact";
import Contact from "@interfaces/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  const data: Contact = await request.json();

  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: " +
          (!data.firstName ? "firstName " : "") +
          (!data.lastName ? "lastName " : "") +
          (!data.email ? "email " : "") +
          (!data.message ? "message " : ""),
      },
      { status: 400 }
    );
  }

  const { data: response, error } = await resend.emails.send({
    from: process.env.RESEND_FROM || "",
    to: [process.env.ADMIN_EMAIL || ""],
    subject: "[ViviteProject] Nouvelle prise de contact",
    react: TemplateContact(data),
  });

  if (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
  return NextResponse.json(response, { status: 200 });
};
