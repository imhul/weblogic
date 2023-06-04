import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

export function idGenerator(user) {
    const value = user.ip || user.email || user.name;
    const seed = uuidv4();
    const userId = uuidv5(value, seed);
    return userId;
}
