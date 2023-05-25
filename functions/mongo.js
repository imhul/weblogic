// EXAMPLE: https://github.com/imhul/netlify-functions-workshop/blob/master/lessons/core-concepts/6-using-a-database/functions/mongo/mongo.js
import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
// import { request } from 'undici';
import { env } from './utils/config';

const build = async () => {
    const { atlasBase, authdb } = env;

    try {
        const client = new MongoClient(atlasBase, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        });

        console.warn('connection...');
        await client.connect();
        const connect = await client.db(authdb).command({ ping: 1 });
        console.warn('connect! ', connect);
        if (connect) {
            await client.close();
            return {
                statusCode: 200,
                body: JSON.stringify({ ok: true, code: 200 })
            };
        } else {
            console.warn('Failed  mongodb connection! ', error);
            await client.close();
            return {
                statusCode: 524,
                body: JSON.stringify({
                    error: 'Failed  mongodb connection!',
                    code: 524
                })
            };
        }
    } catch (error) {
        console.warn('Common mongodb error! ', error);
        return {
            statusCode: 525,
            body: JSON.stringify({
                error: 'Common mongodb error!',
                code: 524
            })
        };
    }
};

const handler = builder(build);

export { handler };
