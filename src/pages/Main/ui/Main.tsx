import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Counter } from 'entities/Counter';

function Main() {
    const { t } = useTranslation();

    return (
        <span>
            {t('title')}
            {/* <Counter /> */}
        </span>
    );
}

export default Main;
