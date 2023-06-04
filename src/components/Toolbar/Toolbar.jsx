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
    Card,
    Button,
    Drawer,
    Tooltip,
    Divider,
    Segmented,
    Typography,
    Popconfirm
} from 'antd/lib';
import {
    HeartFilled,
    LogoutOutlined,
    LoadingOutlined,
    CloseCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import Gravatar from 'react-gravatar';
import Registration from '../Forms/Registration';
import ChangePass from '../Forms/ChangePass';
import Forgot from '../Forms/Forgot';
import Login from '../Forms/Login';
// utils
import translate from '../../utils/translations';
import userUpdate from '../../utils/userUpdate';
import {
    langOptions,
    contactMethodOptions
} from '../../utils/config';

const Title = Typography.Title;

const Toolbar = memo(() => {
    const [currentPage, setCurrentPage] = useState('Home');
    const {
        tip,
        lang,
        safe,
        location,
        isMenuOpen,
        authFormType,
        contactMethod
    } = useSelector(s => s.ui);
    const [isUserUpdated, setIsUserUpdated] = useState(false);
    const { users, currentUser } = useSelector(s => s.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAuth && !authFormType.length) {
            dispatch({
                type: 'CHANGE_AUTH_FORM_TYPE',
                payload: 'login'
            });
        }
    }, [authFormType, currentUser.isAuth]);

    const UserBlock = () => (
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
    );

    const Extra = () => (
        <Popconfirm
            placement="topLeft"
            title={translate(lang, 'logout')}
            description={translate(lang, 'logout_question')}
            onConfirm={logout}
            okText={translate(lang, 'yes')}
            cancelText={translate(lang, 'cancel')}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        >
            <Tooltip
                overlayInnerStyle={{ color: '#fdd835' }}
                color="#2a414c"
                placement="left"
                zIndex={1100}
                title={translate(lang, 'logout')}
            >
                <Button type="link" className="no-p">
                    <LogoutOutlined style={{ fontSize: 32 }} />
                </Button>
            </Tooltip>
        </Popconfirm>
    );

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

    useEffect(() => {
        if (
            currentUser.isAuth &&
            !isUserUpdated &&
            safe &&
            lang &&
            authFormType === 'login'
        ) {
            userUpdate(currentUser, lang, safe);
            setIsUserUpdated(true);
        }
    }, [isUserUpdated, currentUser, lang, safe, authFormType]);

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
        switch (authFormType) {
            case 'login':
                return <Login />;
            case 'reg':
                return <Registration />;
            case 'forgot':
                return <Forgot />;
            case 'change_pass':
                return <ChangePass />;
            default:
                return null;
        }
    };

    return (
        <div className="Toolbar">
            {
                !users.length || !currentUser.ip.length ? <LoadingOutlined className="white" /> : (
                    <i
                        className="icon-lamp burger"
                        onClick={() =>
                            dispatch({
                                type: 'TOGGLE_TOOLBAR',
                                payload: true
                            })
                        }
                    />
                )
            }

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
                closeIcon={
                    <CloseCircleOutlined style={{ fontSize: 32 }} />
                }
                open={isMenuOpen}
                bodyStyle={{ paddingBottom: 80 }}
                extra={<Extra />}
            >
                <UserBlock />
                <Divider>{translate(lang, 'menu_heading')}</Divider>
                <Menu
                    onClick={navigate}
                    selectedKeys={[currentPage]}
                    mode="inline"
                    items={menuItems}
                />
                {!currentUser.isAuth && (
                    <>
                        <Divider>
                            {translate(lang, `${authFormType}_form`)}
                        </Divider>
                        {currentUser.isRobot ? (
                            <Captcha />
                        ) : (
                            renderForm()
                        )}
                    </>
                )}

                <Divider>{translate(lang, 'lang_title')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'english'}
                    options={langOptions}
                    value={lang}
                    onChange={data => {
                        dispatch({ type: 'TOGGLE_USER_LANG_SELECT' });
                        dispatch({
                            type: 'CHANGE_LANG',
                            payload: data
                        });
                    }}
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
