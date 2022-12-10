import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <Button
                    onClick={onToggle}
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={styles.mainLink}
                >
                    Войти
                </Button>
                <Modal isOpen={isOpen} onClose={onToggle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci cupiditate, dolorem eaque exercitationem laborum
                    neque quaerat quibusdam quis reiciendis reprehenderit!
                </Modal>
            </div>
        </div>
    );
};
