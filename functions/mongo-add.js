import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
import { env, API_ACTIONS } from './utils/config';

const build = async event => {
    const { atlasConnect, atlasName, atlasPass, mongoAPI } = env;
    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(
                `${mongoAPI}${API_ACTIONS.MONGO_ADD}?=`,
                ''
            )
        )
    );

    if (!data) {
        return {
            statusCode: 530,
            statusText: 'No data provided: ' + data,
            body: JSON.stringify({
                code: 530,
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
        const add = await collection.insertOne({ ...data.query });
        console.info('add: ', add);
        if (add.acknowledged) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ok: true,
                    code: 200,
                    data: 'added'
                })
            };
        } else {
            console.warn('Failed  mongodb add!');
            return {
                statusCode: 531,
                statusText: 'Failed  mongodb add: ' + add,
                body: JSON.stringify({
                    error: 'Failed  mongodb add!',
                    code: 531
                })
            };
        }
    } catch (error) {
        console.warn('Common mongodb error: ', error);
        return {
            statusCode: 532,
            statusText: 'Common mongodb error: ' + error,
            body: JSON.stringify({
                error: 'Common mongodb error: ' + error,
                code: 532
            })
        };
    } finally {
        await client.close();
    }
};

const handler = builder(build);

export { handler };
