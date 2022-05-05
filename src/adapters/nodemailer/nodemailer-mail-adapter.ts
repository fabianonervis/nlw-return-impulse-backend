import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "",//Gerado pelo mailtrap
      pass: ""//Gerado pelo mailtrap
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Fedget <oi@feedget.com>',
            to: 'Fabiano <email@teste.com>',
            subject,
            html: body
        });
    };
}