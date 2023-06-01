// core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Configuration, OpenAIApi } from 'openai';
// utils
import translate from '../utils/translations';

const roles = {
    ASSISTENT: 'assistent',
    USER: 'user',
    SYSTEM: 'system'
};

const useTip = () => {
    const { safe, tip, lang } = useSelector(s => s.ui);
    const dispatch = useDispatch();
    const content = translate('tip_request');
    const question = [{ role: roles.USER, content }];

    useEffect(() => {
        if (tip.length && !safe.tipKey) return;

        const timeout = setTimeout(async () => {
            if (!ignore && safe && safe.tipKey) {
                const configuration = new Configuration({
                    apiKey: safe.tipKey
                });
                const openai = new OpenAIApi(configuration);

                try {
                    const response =
                        await openai.createChatCompletion({
                            model: 'gpt-3.5-turbo-0301', // gpt-3.5-turbo
                            messages: question
                        });
                    if (response.data.choices[0].message.content) {
                        dispatch({
                            type: 'SET_TIP_OF_THE_DAY',
                            payload:
                                response.data.choices[0].message
                                    .content
                        });
                    } else {
                        console.warn('AI Chat Unknown Error!');
                    }
                } catch (error) {
                    console.warn(
                        'AI Chat Error: ',
                        error.message || error
                    );
                }
            }
            clearTimeout(timeout);
        }, 1000);

        let ignore = false;
        return () => {
            ignore = true;
            clearTimeout(timeout);
        };
    }, [safe, lang]);
};

export default useTip;
