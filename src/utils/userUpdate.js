import { getMongoUserUpdate } from './api';
import { API_ACTIONS } from './config';

function userUpdate(user, lang, safe) {
    async function update() {
        if (!safe && !lang && !user) return;

        const {
            _id,
            name,
            email,
            pass,
            role,
            isAuth,
            isRobot,
            ...rest
        } = user;

        try {
            const connected = await getMongoUserUpdate(
                `${safe.apiURL}${
                    API_ACTIONS.MONGO_UPDATE
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: rest
                    })
                )}`,
                lang
            );
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
