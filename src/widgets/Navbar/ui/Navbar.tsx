import React from 'react';

import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={"/"} className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.RED}>О сайте</AppLink>
            </div>
        </div>
    );
};
