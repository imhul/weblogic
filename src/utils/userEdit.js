import { getMongoUserUpdate } from './api';
import { API_ACTIONS } from './config';

function userEdit(query, lang, safe) {
    async function edit() {
        if (!safe && !lang && !query) return;

        try {
            const connected = await getMongoUserUpdate(
                `${safe.mongoAPI}${
                    API_ACTIONS.MONGO_UPDATE
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: query
                    })
                )}`,
                lang
            );
            console.warn('connected: ', connected);
            console.warn(
                !connected.ok
                    ? '::: User edit NOT sended! :::'
                    : '::: User edit sended! :::'
            );
        } catch (error) {
            console.error('::: User edit ERROR! :::', error);
        }
    }

    edit();
}

export default userEdit;
