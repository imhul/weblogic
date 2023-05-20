import { builder } from '@netlify/functions';
import nodemailer from 'nodemailer';
// utils
import { safe } from './utils/safe';

const build = async event => {
    const { mCode, getEmail, mPW } = safe;

    if (!mCode.length && !getEmail.length && !mPW.length) {
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
            event.rawUrl.replace((getEmail || safe.getEmail) + '/?=', '')
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

    const { name, email, subject, message, copy } = data;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mCode || safe.mCode,
                pass: mPW || safe.mPW
            }
        });

        const mailOptions = {
            from: `Weblogic <${mCode}>`,
            to: copy ? [mCode, email] : mCode,
            subject,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
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
