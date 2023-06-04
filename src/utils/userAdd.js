import { getMongoUserAdd } from './api';
import { API_ACTIONS } from './config';

function userUpdate(user, lang, safe) {
    async function update() {
        if (!safe && !lang && !user) return;

        const { _id, isAuth, isRobot, ...rest } = user;

        try {
            const connected = await getMongoUserAdd(
                `${safe.mongoAPI}${
                    API_ACTIONS.MONGO_ADD
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: rest
                    })
                )}`,
                lang
            );
            console.warn('connected: ', connected);
            console.warn(
                !connected.ok
                    ? '::: User add NOT sended! :::'
                    : '::: User add sended! :::'
            );
        } catch (error) {
            console.error('::: User update ERROR! :::', error);
        }
    }

    update();
}

export default userUpdate;
