import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Switch } from 'antd/lib';

const Toolbar = memo(() => {
    const { lang } = useSelector(state => state.ux);
    const dispatch = useDispatch();

    return (
        <div className="Toolbar">
            <Switch
                defaultChecked={lang === 'english' ? true : false}
                onChange={data =>
                    dispatch({
                        type: 'CHANGE_LANG',
                        payload: data
                    })
                }
                unCheckedChildren="en"
                checkedChildren="ua"
            />
        </div>
    );
});

export default Toolbar;
