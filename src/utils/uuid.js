import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

export function idGenerator(user) {
    const v4options = {
        random: [
            0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71,
            0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
        ]
    };
    const random = uuidv4(v4options);
    const value = user ? user.ip || user.email || user.name : random;
    const seed = uuidv4(v4options);
    const userId = uuidv5(value, seed);
    return userId;
}
