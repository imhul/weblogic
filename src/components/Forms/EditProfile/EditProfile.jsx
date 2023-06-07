import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import {
    Checkbox,
    Divider,
    message,
    Button,
    Input,
    Form
} from 'antd/lib';
import {
    EyeOutlined,
    UserOutlined,
    SaveOutlined,
    MailOutlined,
    LockOutlined,
    LoadingOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';
import { messageOptions } from '../../../utils/config';
import userEdit from '../../../utils/userEdit';

const FormItem = Form.Item;
const Password = Input.Password;

const EditProfile = () => {
    const { users, currentUser } = useSelector(s => s.auth);
    const { safe, lang } = useSelector(s => s.ui);
    const [checkedEmail, setCheckedEmail] = useState(false);
    const [checkedName, setCheckedName] = useState(false);
    const [checkedPass, setCheckedPass] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const label = name => (
        <Checkbox
            onChange={() => {
                switch (name) {
                    case 'name':
                        setCheckedName(!checkedName);
                        break;
                    case 'email':
                        setCheckedEmail(!checkedEmail);
                        break;
                    case 'pass':
                        setCheckedPass(!checkedPass);
                        break;
                    default:
                        break;
                }
            }}
        >
            {translate(lang, `change_${name}`)}
        </Checkbox>
    );

    const save = useCallback(() => {
        if (submitting && !safe && !users) return;
        setSubmitting(true);
        console.info('start submit');
        const values = form.getFieldsValue();
        const query = {
            userId: currentUser.userId,
            name: checkedName ? values.name || currentUser.name : '',
            email: checkedEmail
                ? values.email || currentUser.email
                : '',
            pass: checkedPass ? values.pass || currentUser.pass : ''
        };
        if (
            !query.name &&
            !query.email &&
            !query.pass &&
            !currentUser.userId
        ) {
            message.error({
                content: `${translate(lang, 'no_changes_message')}`,
                ...messageOptions
            });
            return;
        }
        dispatch({
            type: 'USER_UPDATE',
            payload: query
        });
        userEdit(query, lang, safe);
        console.info('EditProfileComponent: query: ', query);
        console.info('EditProfileComponent: values: ', values);
        form.resetFields();
        setSubmitting(false);
        message.success({
            content: `${translate(lang, 'edit_success_message')}`,
            ...messageOptions
        });
    }, [
        form,
        safe,
        users,
        submitting,
        checkedEmail,
        checkedName,
        checkedPass,
        currentUser,
        lang
    ]);

    return (
        <Form form={form} layout="vertical" requiredMark={false}>
            {/* name */}
            <Divider>{translate(lang, 'change_name_title')}</Divider>
            <FormItem
                label={label('name')}
                name="name"
                rules={
                    checkedName
                        ? [
                              {
                                  required: checkedName,
                                  message: translate(
                                      lang,
                                      'new_name_required_message'
                                  )
                              }
                          ]
                        : []
                }
            >
                <Input
                    disabled={!checkedName}
                    addonBefore={<UserOutlined className="white" />}
                    placeholder={
                        checkedName
                            ? translate(lang, 'new_name_placeholder')
                            : currentUser.name
                    }
                />
            </FormItem>

            {/* email */}
            <Divider>{translate(lang, 'change_email_title')}</Divider>
            <FormItem
                label={label('email')}
                name="email"
                rules={
                    checkedEmail
                        ? [
                              {
                                  min: 8,
                                  type: 'email',
                                  whitespace: true,
                                  message: translate(
                                      lang,
                                      'message_invalid_email'
                                  )
                              },
                              {
                                  required: checkedEmail,
                                  message: translate(
                                      lang,
                                      'message_required_email'
                                  )
                              }
                          ]
                        : []
                }
            >
                <Input
                    disabled={!checkedEmail}
                    addonBefore={<MailOutlined className="white" />}
                    placeholder={
                        checkedEmail
                            ? translate(lang, 'new_email_placeholder')
                            : currentUser.email || '**********'
                    }
                />
            </FormItem>

            {/* old pass */}
            <Divider>{translate(lang, 'change_pass_title')}</Divider>
            <FormItem
                label={label('pass')}
                name="old-pass"
                rules={
                    checkedPass
                        ? [
                              {
                                  min: 6,
                                  required: checkedPass,
                                  whitespace: true,
                                  message: translate(
                                      lang,
                                      'old_pass_required_message'
                                  )
                              }
                          ]
                        : []
                }
            >
                <Password
                    disabled={!checkedPass}
                    placeholder={translate(lang, 'old_pass')}
                    addonBefore={<LockOutlined className="white" />}
                />
            </FormItem>

            {/* pass */}
            <FormItem
                name="pass"
                hasFeedback
                rules={
                    checkedPass
                        ? [
                              {
                                  min: 6,
                                  required: checkedPass,
                                  whitespace: true,
                                  message: translate(
                                      lang,
                                      'new_pass_required_message'
                                  )
                              }
                          ]
                        : []
                }
            >
                <Password
                    disabled={!checkedPass}
                    placeholder={translate(lang, 'new_pass')}
                    addonBefore={<LockOutlined className="white" />}
                    autoComplete="new-password"
                    iconRender={visible =>
                        visible ? (
                            <EyeOutlined className="white" />
                        ) : (
                            <EyeInvisibleOutlined className="white" />
                        )
                    }
                />
            </FormItem>

            <FormItem
                label={translate(lang, 'confirm_password')}
                name="confirm-pass"
                dependencies={['pass']}
                hasFeedback
                rules={
                    checkedPass
                        ? [
                              {
                                  min: 6,
                                  required: checkedPass,
                                  whitespace: true,
                                  message: translate(
                                      lang,
                                      'confirm_new_pass_required_message'
                                  )
                              },
                              ({ getFieldValue }) => ({
                                  validator(_, value) {
                                      if (
                                          !value ||
                                          getFieldValue('pass') ===
                                              value
                                      ) {
                                          return Promise.resolve();
                                      }
                                      return Promise.reject(
                                          new Error(
                                              translate(
                                                  lang,
                                                  'two_pass_not_match_message'
                                              )
                                          )
                                      );
                                  }
                              })
                          ]
                        : []
                }
            >
                <Password
                    disabled={!checkedPass}
                    placeholder={translate(lang, 'repeat_pass')}
                    addonBefore={<LockOutlined className="white" />}
                    autoComplete="new-password"
                    iconRender={visible =>
                        visible ? (
                            <EyeOutlined className="white" />
                        ) : (
                            <EyeInvisibleOutlined className="white" />
                        )
                    }
                />
            </FormItem>

            <FormItem>
                <Button
                    block
                    onClick={save}
                    htmlType="submit"
                    disabled={submitting}
                    icon={
                        submitting ? (
                            <LoadingOutlined className="white" />
                        ) : (
                            <SaveOutlined className="white" />
                        )
                    }
                >
                    {!submitting && translate(lang, 'save')}
                </Button>
            </FormItem>
        </Form>
    );
};

export default EditProfile;
