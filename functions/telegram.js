import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe, headers } from './utils/safe';

const build = async event => {
    const { tCode, getTG } = safe;
    const data =
        (await event.queryStringParameters?.data) ??
        event.body?.data ??
        event.rawUrl.replace(getTG, '') ??
        null;

    if (!data) {
        return {
            statusCode: 514,
            body: JSON.stringify({
                error:
                    '::: Telegram: No data! with event: ' +
                    JSON.stringify(event) +
                    ':::'
            })
        };
    }

    try {
        const url = `${tCode}${data}'`;
        const tg = await request(url, { headers });
        const result = await tg.body.json();

        if (!tg) {
            return {
                statusCode: 517,
                body: JSON.stringify({
                    error: '::: Telegram: server is not responding! :::'
                })
            };
        }

        if (!result.ok) {
            return {
                statusCode: 516,
                body: JSON.stringify({
                    error:
                        '::: Telegram: No data! with event: ' +
                        JSON.stringify(result) +
                        ':::'
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 515,
            body: JSON.stringify({
                error:
                    '::: Telegram is not responding with error: ' +
                    (error.message ?? error) +
                    ' :::'
            })
        };
    }
};

const handler = builder(build);

export { handler };