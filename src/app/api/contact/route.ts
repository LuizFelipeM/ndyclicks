import { emailRegex } from "@/utils/regex";
import { EmailParams, MailerSend, Recipient } from "mailersend";

interface ContactDto {
  name: string;
  email: string;
  message: string;
}

export async function POST(contact: ContactDto): Promise<Response> {
  try {
    console.log('contact', contact)
    if (!contact.email && !emailRegex.test(contact.email))
      return Response.json({ error: new Error("E-mail inválido") });
    if (!contact.name)
      return Response.json({ error: new Error("Nome inválido") });
    if (!contact.message)
      return Response.json({ error: new Error("Mensagem inválida") });

    const mailersend = new MailerSend({
      apiKey: String(process.env.MAILSEND_API_KEY),
    });

    const recipients = [new Recipient("nandayara.ph@gmail.com", "Nandayara")];
    const params = new EmailParams()
      .setFrom({ email: contact.email, name: contact.name })
      .setTo(recipients)
      .setSubject(`Nova solicitação de contato de ${contact.name}!`)
      .setHtml(contact.message)
      .setText(contact.message);

    await mailersend.email.send(params);
    return Response.json(undefined, { status: 204 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
