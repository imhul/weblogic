// utils
import { message } from 'antd/lib';
import translate from '../utils/translations';
import { messageOptions, GET_CONFIG, GET_JSON_CONFIG } from '../utils/config';
import { getErrorByCode } from '../utils/statuses';

const getContent = (response, lang) => {
    const status = response.status ?? response.code ?? '::: no status :::';
    return `${translate(lang, 'message_error')} \nStatus: ${status} \nError: ${
        response.statusText ??
        response.errorMessage ??
        response.message ??
        response.error ??
        '::: unknown error :::'
    } \nDescription: ${getErrorByCode(status) ?? '::: no description :::'}`;
};

const request = async (url, config, lang) => {
    const response = await fetch(url, config);
    if (response.ok !== undefined) {
        if (response.status !== 200 && response.code !== 200) {
            message.error({
                ...messageOptions,
                content: getContent(response, lang)
            });
        }
        return response;
    }
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);

    if (
        result.ok !== undefined &&
        response.status !== 200 &&
        response.code !== 200
    ) {
        message.error({
            ...messageOptions,
            content: getContent(result, lang)
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

export const isMongoConnected = async (url, lang) => {
    const result = await request(url, GET_JSON_CONFIG, lang);
    return result;
};
