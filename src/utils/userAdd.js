import { getMongoUserAdd } from './api';
import { API_ACTIONS } from './config';

function userAdd(user, lang, safe) {
    async function add() {
        if (!safe && !lang && !user) return;

        const { isAuth, isRobot, ...rest } = user;

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

            return true;
        } catch (error) {
            console.error('::: User add ERROR! :::', error);
            return false;
        }
    }

    return add();
}

export default userAdd;
