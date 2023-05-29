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
    Typography,
    Popconfirm
} from 'antd/lib';
import {
    HeartFilled,
    MenuOutlined,
    LogoutOutlined,
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
import {
    forms,
    langOptions,
    contactMethodOptions
} from '../../utils/config';

const Title = Typography.Title;

const Toolbar = memo(() => {
    const [currentPage, setCurrentPage] = useState('Home');
    const {
        tip,
        lang,
        location,
        isMenuOpen,
        authFormType,
        contactMethod
    } = useSelector(state => state.ui);
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

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
                <span>{translate('user_name_title')}</span>
                <Title level={4}>{currentUser.name}</Title>
            </Col>
        </Row>
    );

    const Extra = () => (
        <Popconfirm
            placement="topLeft"
            title={translate('logout')}
            description={translate('logout_question')}
            onConfirm={logout}
            okText={translate('yes')}
            cancelText={translate('cancel')}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        >
            <Tooltip
                overlayInnerStyle={{ color: '#fdd835' }}
                color="#2a414c"
                placement="left"
                zIndex={1100}
                title={translate('logout')}
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

    const submit = () => {
        console.info('submit');
    };

    const renderForm = () => {
        switch (authFormType) {
            case 'login':
                return <Login onSubmit={submit} />;
            case 'reg':
                return Registration();
            case 'forgot':
                return Forgot();
            case 'change_pass':
                return ChangePass();
            default:
                return null;
        }
    };

    return (
        <div className="Toolbar">
            <i
                className="icon-lamp burger"
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
                        {translate('toolbar_heading')}
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

                <Divider>{translate('menu_heading')}</Divider>
                <Menu
                    onClick={navigate}
                    selectedKeys={[currentPage]}
                    mode="inline"
                    items={menuItems}
                />
                <Divider>{translate(`${authFormType}_form`)}</Divider>

                <Form
                    form={form}
                    className="auth-form"
                    name="auth-form"
                    layout="vertical"
                >
                    {renderForm()}
                </Form>
                <Divider>{translate('lang_title')}</Divider>
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
                <Divider>{translate('contact_method')}</Divider>
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

                <Divider>{translate('tip_heading')}</Divider>
                <Card
                    type="inner"
                    title={
                        tip
                            ? translate('tip_like')
                            : translate('tip_await')
                    }
                    extra={
                        tip ? (
                            <Button icon={<HeartFilled />}>
                                {translate('like_btn')}
                            </Button>
                        ) : null
                    }
                >
                    {tip ? tip : translate('loading')}
                </Card>
            </Drawer>
        </div>
    );
});

export default Toolbar;
