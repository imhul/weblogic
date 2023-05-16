import { builder } from '@netlify/functions';
import nodemailer from 'nodemailer';
import { safe } from './utils/safe';

const build = async (event, context) => {
    const { mCode, smail } = safe;
    const subject = 'Default subject';
    const copy = false;

    try {
        const { name, email, message } = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: mCode,
                pass: smail
            }
        });

        const mailOptions = {
            from: mCode,
            to: copy ? [mCode, email] : mCode,
            subject,
            text: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.warn('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
};

const handler = builder(build);

export { handler };
