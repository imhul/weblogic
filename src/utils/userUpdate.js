import { getMongoUserUpdate } from './api';
import { MONGO_ACTIONS } from './config';

function userUpdate(user, lang, safe) {
    console.warn('run userUpdate!');
    async function update() {
        if (!safe && !lang && !user) return;
        const connected = await getMongoUserUpdate(
            `${safe.getMongo}/?=${encodeURIComponent(
                JSON.stringify({
                    action: MONGO_ACTIONS.UPDATE,
                    db: safe.authdb,
                    collection: safe.authCollection,
                    query: user
                })
            )}`,
            lang
        );
        console.warn(
            !connected.ok
                ? '::: User update NOT sended! :::'
                : '::: User update sended! :::'
        );
    }

    update();
}

export default userUpdate;
