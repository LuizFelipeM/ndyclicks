import { createClient } from "@/prismicio";
import { EmailParams, MailerSend, Recipient } from "mailersend";
import { NextRequest, NextResponse } from "next/server";

interface FieldDto {
  title: string;
  value: unknown;
}

interface ContactDto {
  fields: FieldDto[];
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ channel: "email" | "sms" }> }
) {
  try {
    if (!req.body) return NextResponse.json(undefined, { status: 400 });

    const { channel } = await params;

    switch (channel) {
      case "email":
        return sendEmailHandler(await req.json());
      default:
        throw new Error("Canal de contato não implementado");
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

async function sendEmailHandler(contact: ContactDto): Promise<NextResponse> {
  if (!contact.fields || !contact.fields.length)
    return NextResponse.json(
      { error: new Error("Campos inválidos") },
      { status: 400 }
    );

  const mailersend = new MailerSend({
    apiKey: String(process.env.MAILSEND_API_KEY),
  });

  const client = createClient();
  const documents = await client.getAllByType("contact_data");
  if (!documents || !documents[0].data.email)
    throw new Error(
      "Não foi possível enviar sua solicitação de contato, por favor, tente novamente mais tarde"
    );

  const message = contact.fields.map(
    ({ title, value }) => `${title}: ${value}`
  );
  const emailParams = new EmailParams()
    .setFrom({
      email: "contact@trial-vywj2lprx3q47oqz.mlsender.net",
    })
    .setTo([new Recipient(documents[0].data.email.toString())])
    .setSubject(`Nova solicitação de contato recebida!`)
    .setHtml(message.join("<br/>"))
    .setText(message.join("\n"));

  await mailersend.email.send(emailParams);
  return new NextResponse(null, { status: 204 });
}
