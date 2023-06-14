import { builder } from '@netlify/functions';
import nodemailer from 'nodemailer';
// utils
import { env, API_ACTIONS } from './utils/config';

const build = async event => {
    const { mCode, apiURL, mPW } = env;

    if (!mCode.length && !apiURL.length && !mPW.length) {
        return {
            statusCode: 520,
            body: JSON.stringify({
                code: 520,
                message: 'No environment provided!'
            })
        };
    }

    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(
                `${apiURL}${API_ACTIONS.EMAIL}?=`,
                ''
            )
        )
    );

    if (!data) {
        return {
            statusCode: 519,
            body: JSON.stringify({
                code: 519,
                message: 'No data provided!'
            })
        };
    }

    const { name, email, subject, message } = data;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mCode || env.mCode,
                pass: mPW || env.mPW
            }
        });

        const mailOptions = {
            from: `Weblogic Contact Form <${mCode}>`,
            to: mCode,
            subject,
            text: `Sended by: ${name}\n${name}'s email: ${email}\n${name}'s subject: ${subject}\n${name}'s message: ${message}`
        };

        if (
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
        }

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, error => {
                if (error) {
                    reject({
                        statusCode: 522,
                        body: JSON.stringify({
                            code: 522,
                            message:
                                'Error sending email: ::: unknown error :::'
                        })
                    });
                } else {
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify({
                            code: 200,
                            message: 'Email sent successfully'
                        })
                    });
                }
            });
        });
    } catch (error) {
        return {
            statusCode: 523,
            body: JSON.stringify({
                message:
                    'Error sending email: ' +
                    (error.error ??
                        error.errorMessage ??
                        error ??
                        '::: unknown error :::'),
                code: 523
            })
        };
    }
};

const handler = builder(build);

export { handler };
