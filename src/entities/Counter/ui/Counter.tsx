import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';

const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="counter-value">
                value
                {value}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>
                {t('increament')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};

export default Counter;
