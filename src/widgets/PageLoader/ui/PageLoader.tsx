import React from 'react';

import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(classNames(styles.PageLoader, {}, [className]))}>
        <Loader />
    </div>
);

export default PageLoader;
