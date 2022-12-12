import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';

interface IProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateScheme>
}

const StoreProvider: React.FC<IProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
