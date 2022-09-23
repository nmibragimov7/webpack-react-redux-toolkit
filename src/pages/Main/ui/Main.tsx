import React from "react";
import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation()

    return (
        <span>{t('title')}</span>
    )
}

export default Main;
