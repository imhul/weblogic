// utils
import { message } from 'antd/lib';
import { lang } from '../utils/translations';
import translate from '../utils/translations';
import { messageOptions, GET_CONFIG, GET_JSON_CONFIG } from '../utils/config';

const getContent = response => {
    const status = response.status ?? response.code ?? '::: unknown status :::';
    return `${translate(lang, 'message_error')} Status: ${status}, Error:  ${
        response.statusText ??
        response.errorMessage ??
        response.message ??
        response.error ??
        '::: unknown error :::'
    }`;
};

const request = async (url, config) => {
    const response = await fetch(url, config);
    if (response.ok !== undefined) {
        if (response.status !== 200 && response.code !== 200) {
            message.error({
                ...messageOptions,
                content: getContent(response)
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
            content: getContent(result)
        });
    }
    return result;
};

export const getRecaptcha = async url => {
    const result = await request(url, GET_CONFIG);
    return result.ok;
};

export const getTelegram = async url => {
    const result = await request(url, GET_CONFIG);
    return result;
};

export const sendEmail = async url => {
    const result = await request(url, GET_JSON_CONFIG);
    return result;
};
