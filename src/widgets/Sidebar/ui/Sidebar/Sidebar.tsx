import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={styles.menu}>
                <AppLink className={styles.item} theme={AppLinkTheme.INVERTED} to={RouterPath.main}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('menu.0')}</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RouterPath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('menu.1')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                theme={ThemeButton.OUTLINE}
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
