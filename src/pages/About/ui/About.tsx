import React from "react";
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation('about')

    return (
        <span>{t('title')}</span>
    )
}

export default About;
