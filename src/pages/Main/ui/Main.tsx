import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
    const { t } = useTranslation();

    return (
        <span>{t('title')}</span>
    );
}

export default Main;
