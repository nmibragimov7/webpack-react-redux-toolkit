import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    children: ReactNode,
    element?: HTMLElement
}

const Portal: React.FC<IProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};

export default Portal;
