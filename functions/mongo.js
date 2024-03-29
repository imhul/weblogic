import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
import { env, API_ACTIONS } from './utils/config';

const build = async event => {
    const { atlasConnect, atlasName, atlasPass, apiURL } = env;
    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(
                `${apiURL}${API_ACTIONS.MONGO_ALL}?=`,
                ''
            )
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
        console.info('MONGO ALL! data: ', data);
        await client.connect();
        console.info('connected to server!');
        const connect = await client.db(data.db).command({ ping: 1 });
        console.info('ping: ', connect.ok);
        const db = client.db(data.db);
        console.info('connected to db!');
        const collection = db.collection(data.collection);
        console.info('connected to collection!');
        const users = await collection.find({}).toArray();
        console.info('users is exist: ', Boolean(users.length));
        if (users.length) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    ok: true,
                    code: 200,
                    data: users
                })
            };
        } else {
            console.warn('Failed  mongodb connection!');
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
                error: 'Common mongodb error! ' + error,
                code: 525
            })
        };
    } finally {
        await client.close();
    }
};

const handler = builder(build);

export { handler };
