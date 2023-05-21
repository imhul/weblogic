import { unlink } from 'fs/promises';

export async function clear(path) {
    try {
        await unlink(path);
    } catch (error) {
        console.info('Cleaning Files Error: ' + error.message);
    }
}
