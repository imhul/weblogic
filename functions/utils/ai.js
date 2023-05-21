import { Configuration, OpenAIApi } from 'openai';
import { createReadStream } from 'fs';

class AI {
    roles = {
        ASSISTENT: 'assistent',
        USER: 'user',
        SYSTEM: 'system'
    };

    constructor() {
        const configuration = new Configuration({
            apiKey: ''
        });
        this.openai = new OpenAIApi(configuration);
    }

    async chat(messages) {
        try {
            const response = await this.openai.createCompletion(messages, {
                model: 'gpt-3.5-turbo'
            });

            return response.data.choices[0].message;
        } catch (error) {
            console.info('AI Chat Error: ' + error.message);
        }
    }

    async voiceReader(mp3) {
        try {
            const response = await this.openai.createTranscription(
                createReadStream(mp3),
                'whisper-1'
            );
            return response.data.text;
        } catch (error) {
            console.info('AI Transcription Error: ' + error.message);
        }
    }
}

const ai = new AI();

export default ai;
