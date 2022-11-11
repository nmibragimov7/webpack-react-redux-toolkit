import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Error.module.scss';

interface IProps {
    classname?: string
}

const Error: React.FC<IProps> = ({ classname }) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.Error, {}, [classname])}>
            <div>{t('error-page')}</div>
            <Button onClick={reloadPage}>{t('update-page')}</Button>
        </div>
    );
};

export default Error;
