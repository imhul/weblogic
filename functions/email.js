import { builder } from '@netlify/functions';
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';
// utils
import { safe } from './utils/safe';

const build = async event => {
    const { mCode, getEmail, client, secret, refresh } = safe;
    const adress = mCode();
    const getMailURL = getEmail();
    const data = JSON.parse(
        decodeURIComponent(event.rawUrl.replace(getMailURL + '/?=', ''))
    );

    try {
        if (!safe && !adress && !client && !secret && !refresh && !getMailURL) {
            return {
                statusCode: 520,
                body: JSON.stringify({
                    code: 520,
                    message: 'No environment provided!'
                })
            };
        }

        if (!data) {
            return {
                statusCode: 519,
                body: JSON.stringify({
                    code: 519,
                    message: 'No data provided!'
                })
            };
        }

        const { name, email, subject, message, copy } = data;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: adress,
                    clientId: client,
                    clientSecret: secret,
                    refreshToken: refresh
                })
            }
        });

        const mailOptions = {
            from: `Weblogic <${adress}>`,
            to: copy ? [adress, email] : adress,
            subject,
            text: `Name: ${name} Email: ${email} Subject: ${subject} Message: ${message}`
        };

        if (
            !mailOptions &&
            !mailOptions.from &&
            !mailOptions.to &&
            !mailOptions.subject &&
            !mailOptions.text
        ) {
            return {
                statusCode: 521,
                body: JSON.stringify({
                    code: 521,
                    message: 'No mailOptions provided!'
                })
            };
        } else return {
            statusCode: 200,
            body: JSON.stringify({
                mailOptions,
                data,
                mail: adress, 
                link: getMailURL
            })
        }

        console.log('mailOptions', mailOptions);

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, response) => {
                if (error) {
                    reject({
                        statusCode: 522,
                        body: JSON.stringify({
                            code: 522,
                            message: 'Error sending email: ' + error,
                            response
                        })
                    });
                } else {
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify({
                            message: 'Email sent successfully'
                        })
                    });
                }
            });
        });
    } catch (error) {
        return {
            statusCode: 523,
            body: JSON.stringify({ message: 'Error sending email: ' + (error.message ?? error), code: 523 })
        };
    }
};

const handler = builder(build);

export { handler };
