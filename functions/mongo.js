// EXAMPLE: https://github.com/imhul/netlify-functions-workshop/blob/master/lessons/core-concepts/6-using-a-database/functions/mongo/mongo.js
import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
// import { request } from 'undici';
import { env } from './utils/config';

const build = async () => {
    const { atlasConnect, authCollection, authdb } = env;
    const client = new MongoClient(atlasConnect);

    try {
        console.warn('connection...');
        console.warn('client: ', client);
        // await client.connect();
        const db = client.db(authdb); // .command({ ping: 1 });
        console.warn('db: ', db);
        const collection = db.collection(authCollection);
        console.warn('collection: ', collection);
        if (collection) {
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
                code: 525
            })
        };
    }
};

const handler = builder(build);

export { handler };
