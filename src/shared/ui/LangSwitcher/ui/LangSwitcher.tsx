import React from 'react';
import { useTranslation } from 'react-i18next';

import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {t('language')}
        </Button>
    );
};

export default LangSwitcher;
