import { UI_UX_types as type } from '../constants/types';

const initState = {
    show: false,
    text: '',
    options: {
        type: 'info', // info, success, warning, error, loading
        duration: 4,
        style: {
            marginTop: '5rem'
        }
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case type.NOTIFY:
            return {
                show: true,
                text: action.payload.text,
                options: {
                    ...state.options,
                    ...action.payload.options
                }
            };

        case type.NOTIFY_DESTROY:
            return {
                show: false,
                text: '',
                options: state.options
            };

        default:
            return state;
    }
};
