import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "be822d4e9b891e",
    pass: "cfa86241f4230b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({subject, body}: SendMailData){
            await transport.sendMail({
                from: 'Equipe Feedget <oi@feedget.com>',
                to: 'Walter Alípio <walteralipio@outlook.com>',
                subject,
                html: body,
            })
    };

}