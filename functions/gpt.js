import { builder } from '@netlify/functions';
import { Telegraf, session } from 'telegraf';
import { message } from 'telegraf/filters';
import { code } from 'telegraf/format';
// utils
import { env } from './utils/config';
import ogg from './utils/ogg';
import ai from './utils/ai';

const build = async () => {
    const INIT_SESSION = { messages: [] };
    const bot = new Telegraf(env.gptBotToken);
    bot.use(session());

    bot.command('start', async ctx => {
        ctx.session = INIT_SESSION;
        ctx.reply('Вітаю!');
    });

    bot.command('new', async ctx => {
        ctx.session = INIT_SESSION;
        await ctx.reply('Розпочато нову сессію!');
    });

    bot.on(message('text'), async ctx => {
        ctx.session ??= INIT_SESSION;
        ctx.reply(JSON.stringify(ctx.message.text, null, 2)); // as console.log

        try {
            await ctx.reply(code('Дай но подумать...'));
            ctx.session.messages.push({
                role: ai.roles.USER,
                content: ctx.message.text
            });
            const response = await ai.chat(ctx.session.messages);
            ctx.session.messages.push({
                role: ai.roles.ASSISTENT,
                content: response.content
            });
            ctx.reply(response.content);
        } catch (error) {
            ctx.reply('Text Bot Error: ' + error.message);
        }
    });

    bot.on(message('voice'), async ctx => {
        ctx.session ??= INIT_SESSION;
        ctx.reply(JSON.stringify(ctx.message.voice, null, 2)); // as console.log

        try {
            await ctx.reply(code('Дай но подумать...'));
            const fileLink = await ctx.telegram.getFileLink(
                ctx.message.voice.file_id
            );
            const userID = String(ctx.message.from.id);
            console.log('ctx.message.from: ', ctx.message.from);
            console.log('userID: ', userID);
            const oggPath = await ogg.convert(fileLink.href, userID);
            console.log('fileLink.href:', fileLink.href);
            console.log('fileLink:', fileLink);

            await ctx.reply(code(fileLink.href)); // test
            const mp3path = await ogg.toMp3(oggPath, userID);
            const text = await ai.voiceReader(mp3path);
            await ctx.reply(code(text)); // question
            ctx.session.messages.push({ role: ai.roles.USER, content: text });
            const response = await ai.chat(ctx.session.messages);
            ctx.session.messages.push({
                role: ai.roles.ASSISTENT,
                content: response.content
            });
            ctx.reply(response.content);
        } catch (error) {
            ctx.reply('Voice Bot Error: ' + error.message);
        }
    });

    bot.launch();
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

const handler = builder(build);

export { handler };
