import { MongoClient, ServerApiVersion, Long } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
import { env, API_ACTIONS } from './utils/config';

const build = async event => {
    const { atlasConnect, atlasName, atlasPass, mongoAPI } = env;
    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(
                `${mongoAPI}${API_ACTIONS.MONGO_UPDATE}?=`,
                ''
            )
        )
    );

    if (!data) {
        return {
            statusCode: 527,
            statusText: 'No data provided: ' + data,
            body: JSON.stringify({
                code: 527,
                message: 'No data provided!'
            })
        };
    }

    const username = encodeURIComponent(atlasName);
    const password = encodeURIComponent(atlasPass);
    const uri = `mongodb+srv://${username}:${password}${atlasConnect}`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: false,
            deprecationErrors: true
        }
    });

    try {
        console.info('MONGO UPDATE! data: ', data);
        await client.connect();
        console.info('connected to server!');
        const connect = await client.db(data.db).command({ ping: 1 });
        console.info('ping: ', connect.ok);
        const db = client.db(data.db);
        console.info('connected to db!');
        const collection = db.collection(data.collection);
        console.info('connected to collection!');
        const { _id, ...rest } = data.query;
        const updated = await collection.updateOne(
            { _id: _id }, // _id: string
            {
                $set: {
                    lastGoogleCheck: `${Date.now()}`,
                }
            }
        );
        console.info('updated: ', updated);
        if (updated.modifiedCount) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ok: true,
                    code: 200,
                    data: updated
                })
            };
        } else {
            console.warn('Failed  mongodb update!');
            return {
                statusCode: 528,
                statusText: 'Failed  mongodb update: ' + updated,
                body: JSON.stringify({
                    error: 'Failed  mongodb update!',
                    code: 528
                })
            };
        }
    } catch (error) {
        console.warn('Common mongodb error: ', error);
        return {
            statusCode: 529,
            statusText: 'Common mongodb error: ' + error,
            body: JSON.stringify({
                error: 'Common mongodb error: ' + error,
                code: 529
            })
        };
    } finally {
        await client.close();
    }
};

const handler = builder(build);

export { handler };
