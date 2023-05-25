import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
import { env } from './utils/config';

const build = async event => {
    const { atlasConnect, getMongo } = env;

    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace((getMongo || env.getMongo) + '/?=', '')
        )
    );

    if (!data) {
        return {
            statusCode: 526,
            body: JSON.stringify({
                code: 526,
                message: 'No data provided!'
            })
        };
    }

    console.info('data: ', data);

    const client = new MongoClient(atlasConnect, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    try {
        const db = client.db(data.db); // .command({ ping: 1 });
        const collection = db.collection(data.collection);
        const result = await collection.find(data.query).toArray();
        if (result.length) {
            const body = JSON.stringify({ ok: true, code: 200, data: result });
            await client.close();
            return { statusCode: 200, body: body };
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
