import { getMongoUserUpdate } from './api';
import { API_ACTIONS } from './config';

function userUpdate(user, lang, safe) {
    console.warn('run userUpdate!');
    async function update() {
        if (!safe && !lang && !user) return;

        try {
            const connected = await getMongoUserUpdate(
                `${safe.mongoAPI}${
                    API_ACTIONS.MONGO_UPDATE
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: user
                    })
                )}`,
                lang
            );
            console.warn('connected: ', connected);
            console.warn(
                !connected.ok
                    ? '::: User update NOT sended! :::'
                    : '::: User update sended! :::'
            );
        } catch (error) {
            console.error('::: User update ERROR! :::', error);
        }
    }

    update();
}

export default userUpdate;
