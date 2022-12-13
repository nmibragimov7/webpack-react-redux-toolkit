import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface IProps {
    className?: string
}

const LoginForm: React.FC<IProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t('auth_by_username.username')} />
            <Input type="text" placeholder={t('auth_by_username.password')} />
            <Button>{t('auth_by_username.button')}</Button>
        </div>
    );
};

export default LoginForm;
