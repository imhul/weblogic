import { builder } from '@netlify/functions';
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';
// utils
import { safe } from './utils/safe';

const build = async event => {
    const { mCode, getEmail } = safe;
    const data = JSON.parse(
        decodeURIComponent(event.rawUrl.replace(getEmail + '/?=', ''))
    );

    try {
        const { name, email, subject, message, copy } = data;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: mCode,
                    clientId: '',
                    clientSecret: '',
                    refreshToken: '',
                })
            }
            // secure: true,
            // auth: {
            //     user: mCode,
            //     pass: ****
            // }
            // host: 'smtp.gmail.com',
            // port: 465,
            // secure: true,
            // auth: {
            //     type: 'OAuth2',
            //     user: mCode,
            //     clientId: '000000000000-xxx0.apps.googleusercontent.com',
            //     clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
            //     refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
            //     accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
            // }
        });

        const mailOptions = {
            from: `Weblogic <${mCode}>`,
            to: copy ? [mCode, email] : mCode,
            subject,
            text: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `
        };

        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: 'Error sending email: ' + error })
                };
            }

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Email sent successfully' })
            };
        });
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email: ' + error })
        };
    }
};

const handler = builder(build);

export { handler };
