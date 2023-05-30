import { MongoClient, ServerApiVersion } from 'mongodb';
// utils
import { builder } from '@netlify/functions';
import { env } from './utils/config';

const build = async event => {
    const { atlasConnect, atlasName, atlasPass, getMongo } = env;
    const data = JSON.parse(
        decodeURIComponent(
            event.rawUrl.replace(
                (getMongo || env.getMongo) + '/?=',
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
            // family: 4
        }
        // connectTimeoutMS: 3000
    });

    try {
        console.info('data: ', data);
        await client.connect();
        console.info('connected 1!');
        const db = client.db(data.db);
        console.info('connected 2!');
        const collection = db.collection(data.collection);
        console.info('connected 3!');
        const connect = await client.db(data.db).command({ ping: 1 });
        console.info('connected 4: ', connect);
        const users = await collection.find(data.query).toArray();
        console.info('users: ', users);
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
