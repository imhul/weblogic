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
    Collapse,
    Segmented,
    Typography,
    Popconfirm
} from 'antd/lib';
import {
    HeartFilled,
    SyncOutlined,
    GithubOutlined,
    LogoutOutlined,
    SettingOutlined,
    CloseCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import Gravatar from 'react-gravatar';
import Registration from '../Forms/Registration';
import Forgot from '../Forms/Forgot';
import Login from '../Forms/Login';
import EditProfile from '../Forms/EditProfile';
// utils
import translate from '../../utils/translations';
import {
    LANG_OPTIONS,
    CONTACT_METHOD_OPTIONS,
    GITHUB_PAGE
} from '../../utils/config';
// api
import userUpdate from '../../utils/userUpdate';
import { getCookies } from '../../utils/api';
import { API_ACTIONS } from '../../utils/config';

const Title = Typography.Title;
const Panel = Collapse.Panel;

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
    const [activeKey, setActiveKey] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAuth && !authFormType.length) {
            dispatch({
                type: 'SET_AUTH_FORM_TYPE',
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

    const Extra = () =>
        currentUser.isAuth ? (
            <Popconfirm
                placement="topLeft"
                title={translate(lang, 'logout')}
                description={translate(lang, 'logout_question')}
                onConfirm={logout}
                okText={translate(lang, 'yes')}
                cancelText={translate(lang, 'cancel')}
                icon={
                    <QuestionCircleOutlined
                        style={{ color: '#ff6f00' }}
                    />
                }
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
        ) : (
            <Button
                type="link"
                className="no-p"
                target="_blank"
                href={GITHUB_PAGE}
                rel="noopener noreferrer"
            >
                <GithubOutlined />
            </Button>
        );

    const navigate = useCallback(e => {
        const key = e.key;
        setCurrentPage(key);
        dispatch({
            type: 'TOGGLE_TOOLBAR',
            payload: false
        });
        dispatch({
            type: 'SET_LOCATION',
            payload: key
        });
    });

    useEffect(() => {
        if (contactMethod === 'SMS')
            dispatch({
                type: 'SET_CONTACT_METHOD',
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
        )
            setCookies();

        async function setCookies() {
            userUpdate(currentUser, lang, safe);
            const body = `${encodeURIComponent(
                JSON.stringify({
                    auto_id: currentUser._id,
                    uid: currentUser.userId,
                    r: currentUser.role
                })
            )}`;

            const url = safe.apiURL + API_ACTIONS.AUTH + '?=' + body;
            console.info('url: ', url);
            const cookies = await getCookies(url, lang);

            console.info('cookies: ', cookies);
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
            default:
                return null;
        }
    };

    return (
        <div className="Toolbar">
            {!users.length || !currentUser.ip.length ? (
                <SyncOutlined
                    className="burger"
                    onClick={() => window.location.reload()}
                />
            ) : (
                <i
                    className="icon-lamp burger"
                    onClick={() =>
                        dispatch({
                            type: 'TOGGLE_TOOLBAR',
                            payload: true
                        })
                    }
                />
            )}

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
                <Divider>
                    {!currentUser.isAuth
                        ? translate(lang, `${authFormType}_form`)
                        : translate(lang, 'settings')}
                </Divider>
                {!currentUser.isAuth ? (
                    currentUser.isRobot ? (
                        <Captcha />
                    ) : (
                        renderForm()
                    )
                ) : (
                    <Collapse
                        size="small"
                        activeKey={activeKey}
                        bordered={false}
                        onChange={() =>
                            setActiveKey(activeKey === '1' ? '' : '1')
                        }
                        expandIcon={({ isActive }) => (
                            <SettingOutlined
                                rotate={isActive ? 90 : 0}
                            />
                        )}
                    >
                        <Panel
                            header={translate(lang, 'change_profile')}
                            key="1"
                        >
                            <EditProfile />
                        </Panel>
                    </Collapse>
                )}

                <Divider>{translate(lang, 'lang_title')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'english'}
                    options={LANG_OPTIONS}
                    value={lang}
                    onChange={data => {
                        dispatch({ type: 'TOGGLE_USER_LANG_SELECT' });
                        dispatch({
                            type: 'SET_LANG',
                            payload: data
                        });
                    }}
                />
                <Divider>{translate(lang, 'contact_method')}</Divider>
                <Segmented
                    block
                    size="small"
                    defaultValue={'Telegram'}
                    options={CONTACT_METHOD_OPTIONS}
                    value={contactMethod}
                    onChange={data =>
                        dispatch({
                            type: 'SET_CONTACT_METHOD',
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
