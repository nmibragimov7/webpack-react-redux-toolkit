import React from 'react';

import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink to={"/"} className={styles.mainLink} theme={AppLinkTheme.INVERTED}>Главная</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>О сайте</AppLink>
            </div>
        </div>
    );
};
