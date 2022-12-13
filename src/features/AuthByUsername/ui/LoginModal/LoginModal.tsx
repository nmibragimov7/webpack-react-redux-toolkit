import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface IProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

const LoginModal: React.FC<IProps> = (props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            className={classNames(styles.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
