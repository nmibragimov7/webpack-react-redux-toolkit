import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {t('not-found')}
        </div>
    );
};

export default NotFound;
