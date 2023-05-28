// core
import React, { memo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import menu from '../../utils/menu';
// components
import {
    Row,
    Col,
    Menu,
    Form,
    Card,
    Button,
    Drawer,
    Tooltip,
    Divider,
    Segmented,
    Typography
} from 'antd/lib';
import {
    CloseCircleOutlined,
    MenuOutlined,
    HeartFilled,
    LogoutOutlined
} from '@ant-design/icons';
import Gravatar from 'react-gravatar';
import Registration from '../Forms/Registration';
import ChangePass from '../Forms/ChangePass';
import Forgot from '../Forms/Forgot';
import Login from '../Forms/Login';
import translate from '../../utils/translations';

const Title = Typography.Title;
const forms = {
    login: {
        title: 'Login',
        id: 'login'
    },
    reg: {
        title: 'Registration',
        id: 'reg'
    },
    forgot: {
        title: 'Forgot password?',
        id: 'forgot'
    },
    reset: {
        title: 'Change password',
        id: 'change_pass'
    }
};

const contactMethodOptions = [
    { label: 'Telegram', value: 'Telegram', disabled: false },
    { label: 'Email', value: 'Email', disabled: false },
    { label: 'SMS', value: 'SMS', disabled: true }
];

const langOptions = [
    { label: 'English', value: 'english', disabled: false },
    { label: 'Ukrainian', value: 'ukrainian', disabled: false }
];

const Toolbar = memo(() => {
    const [currentPage, setCurrentPage] = useState('Home');
    const { tip, location, lang, isMenuOpen, contactMethod } = useSelector(
        state => state.ui
    );
    const { users, currentUser } = useSelector(state => state.auth);
    const [formType, setFormType] = useState(
        !currentUser.isAuth ? 'login' : ''
    ); // login | reg | forgot | reset
    const dispatch = useDispatch();

    const navigate = useCallback(e => {
        const key = e.key;
        setCurrentPage(key);
        dispatch({
            type: 'TOGGLE_TOOLBAR',
            payload: false
        });
        dispatch({
            type: 'LOCATION_UPDATE',
            payload: key
        });
    });

    useEffect(() => {
        if (contactMethod === 'SMS')
            dispatch({
                type: 'CHANGE_CONTACT_METHOD',
                payload: 'Telegram'
            });
    }, [contactMethod]);

    useEffect(() => {
        if (location !== currentPage) setCurrentPage(location);
    }, [location]);

    const menuItems = menu
        .filter(item => !item.isBlank)
        .map(item => ({
            key: item.key,
            icon: item.icon,
            label: <span>{item.key}</span>
        }));

    const logout = () => {
        dispatch({
            type: 'USER_LOGOUT',
            payload: currentUser.userId
        });
    };

    const renderForm = () => {
        const id = forms[formType].id;
        switch (id) {
            case 'login':
                return Login();
            // case id:
            //     return Registration();
            // case id:
            //     return Forgot();
            // case id:
            //     return ChangePass();
            default:
                return null;
        }
    };

    return (
        <div className="Toolbar">
            <MenuOutlined
                className="burger"
                onClick={() =>
                    dispatch({
                        type: 'TOGGLE_TOOLBAR',
                        payload: true
                    })
                }
            />
            <Drawer
                title={
                    <Title level={3}>
                        {translate(lang, 'toolbar_heading')}
                    </Title>
                }
                width={320}
                onClose={() =>
                    dispatch({
                        type: 'TOGGLE_TOOLBAR',
                        payload: false
                    })
                }
                closeIcon={<CloseCircleOutlined style={{ fontSize: 32 }} />}
                open={isMenuOpen}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Tooltip
                        overlayInnerStyle={{ color: '#fdd835' }}
                        color="#2a414c"
                        placement="left"
                        zIndex={1100}
                        title={translate(lang, 'logout')}
                    >
                        <LogoutOutlined
                            style={{ fontSize: 32 }}
                            onClick={logout}
                        />
                    </Tooltip>
                }
            >
                <Row
                    gutter={24}
                    type="flex"
                    justify="center"
                    align="middle"
                    className="user-card"
                >
                    <Col>
                        <Gravatar email={currentUser.email} size={100} />
                    </Col>
                    <Col>
                        <span>{translate(lang, 'user_name_title')}</span>
                        <Title level={4}>{currentUser.name}</Title>
                    </Col>
                </Row>

                <Divider>{translate(lang, 'menu_heading')}</Divider>
                <Menu
                    onClick={navigate}
                    selectedKeys={[currentPage]}
                    mode="inline"
                    items={menuItems}
                />
                <Divider>
                    {translate(lang, `${forms[formType].id}_form`)}
                </Divider>

                <Form layout="vertical">{renderForm()}</Form>
                <Divider>{translate(lang, 'lang_title')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'english'}
                    options={langOptions}
                    value={lang}
                    onChange={data =>
                        dispatch({
                            type: 'CHANGE_LANG',
                            payload: data
                        })
                    }
                />
                <Divider>{translate(lang, 'contact_method')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'Telegram'}
                    options={contactMethodOptions}
                    value={contactMethod}
                    onChange={data =>
                        dispatch({
                            type: 'CHANGE_CONTACT_METHOD',
                            payload: data
                        })
                    }
                />

                <Divider>{translate(lang, 'tip_heading')}</Divider>
                <Card
                    type="inner"
                    title={
                        tip
                            ? translate(lang, 'tip_like')
                            : translate(lang, 'tip_await')
                    }
                    extra={
                        tip ? (
                            <Button icon={<HeartFilled />}>
                                {translate(lang, 'like_btn')}
                            </Button>
                        ) : null
                    }
                >
                    {tip ? tip : translate(lang, 'loading')}
                </Card>
            </Drawer>
        </div>
    );
});

export default Toolbar;
