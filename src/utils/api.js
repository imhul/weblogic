// utils
import { message } from 'antd/lib';
import translate from '../utils/translations';
import {
    messageOptions,
    GET_CONFIG,
    GET_JSON_CONFIG
} from '../utils/config';
import { getErrorByCode } from '../utils/statuses';

const getContent = (response, lang) => {
    const status =
        response.status ?? response.code ?? '::: no status :::';
    return `${translate(
        lang,
        'message_error'
    )} \nStatus: ${status} \nError: ${
        response.statusText ??
        response.errorMessage ??
        response.message ??
        response.error ??
        '::: unknown error :::'
    } \nDescription: ${
        getErrorByCode(status) ?? '::: no description :::'
    }`;
};

const request = async (url, config, lang) => {
    const response = await fetch(url, config);
    if (response.ok !== undefined) {
        if (response.status !== 200 && response.code !== 200 && response.statusCode !== 200) {
            const content = getContent(response, lang);
            console.warn(content);
            message.error({
                ...messageOptions,
                content
            });
        }
        return response;
    }
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);

    if (
        result.ok !== undefined &&
        response.status !== 200 &&
        response.code !== 200 &&
        response.statusCode !== 200
    ) {
        const content = getContent(response, lang);
        console.warn(content);
        message.error({
            ...messageOptions,
            content
        });
    }
    return result;
};

export const getRecaptcha = async (url, lang) => {
    const result = await request(url, GET_CONFIG, lang);
    return result.ok;
};

export const getTelegram = async (url, lang) => {
    const result = await request(url, GET_CONFIG, lang);
    return result;
};

export const sendEmail = async (url, lang) => {
    const result = await request(url, GET_JSON_CONFIG, lang);
    return result;
};

export const getMongoDB = async (url, lang) => {
    const result = await request(url, GET_JSON_CONFIG, lang);
    return result;
};

export const getMongoUserUpdate = async (url, lang) => {
    const result = await request(url, GET_JSON_CONFIG, lang);
    return result;
};
