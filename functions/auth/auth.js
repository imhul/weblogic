// TODO:
// https://github.com/imhul/oauth-example
// https://github.com/imhul/netlify-functions-workshop/blob/master/lessons-code-complete/core-concepts/5-authenication/functions/protected.js
//
import { builder } from '@netlify/functions';
import { env, API_ACTIONS } from '../utils/config';
import jwt from 'jsonwebtoken';

const build = async event => {
    console.info('event: ', event);
    const { apiURL, jwtKey } = env;
    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(`${apiURL}${API_ACTIONS.AUTH}?=`, '')
        )
    );

    console.info('data: ', data);

    if (!data) {
        return {
            statusCode: 533,
            statusText: 'No data provided: ' + data,
            body: JSON.stringify({
                code: 533,
                message: 'No data provided!'
            })
        };
    }

    const token = jwt.sign({ ...data }, jwtKey, {
        expiresIn: '1h',
        algorithm: 'HS512'
    });
    console.info('token: ', token);

    if (token) {
        const cookie = `tx=${token}; Domain=${event.headers.host}; Path=/; Expires=${new Date(
            new Date().getTime() + 3600000
        ).toUTCString()}; HttpOnly; Secure`;
        const response = {
            statusCode: 200,
            statusText: 'OK',
            headers: {
                'Set-Cookie': cookie
            }
        };
        return response;
    } else {
        return {
            statusCode: 534,
            statusText: 'No token provided: ' + token,
            body: JSON.stringify({
                code: 534,
                message: 'No token provided!'
            })
        };
    }
};

const handler = builder(build);

export { handler };
