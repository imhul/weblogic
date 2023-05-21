import axios from 'axios';
import { createWriteStream } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import installer from '@ffmpeg-installer/ffmpeg';
// utils
import { clear } from './clear';

const DIRECT = dirname(fileURLToPath(import.meta.url));

class OggConverter {
    constructor() {
        ffmpeg.setFfmpegPath(installer.path);
    }

    async toMp3(input, output) {
        try {
            const outputPath = resolve(dirname(input), `${output}.mp3`);
            return new Promise((resolve, reject) => {
                ffmpeg(input)
                    .inputOption('-t 30')
                    .output(outputPath)
                    .on('end', () => {
                        clear(input);
                        resolve(outputPath);
                    })
                    .on('error', error => reject(error))
                    .run();
            });
        } catch (error) {
            console.info('Method: toMp3, Converter Error: ' + error.message);
        }
    }

    async convert(url, filename) {
        try {
            const oggPath = resolve(DIRECT, '../ogg', `${filename}.ogg`);
            const response = await axios({
                url,
                method: 'get',
                responseType: 'stream'
            });

            return new Promise((resolve, reject) => {
                const stream = response.data.pipe(createWriteStream(oggPath));
                stream.on('finish', () => resolve(oggPath));
                stream.on('error', error => reject(error.message));
            });
        } catch (error) {
            console.info('Method: convert, Converter Error: ' + error.message);
        }
    }
}

const ogg = new OggConverter();

export default ogg;
