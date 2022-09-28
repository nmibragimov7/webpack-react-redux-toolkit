import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation('about');

    return (
        <span>{t('title')}</span>
    );
}

export default About;
