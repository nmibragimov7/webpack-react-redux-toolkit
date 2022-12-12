import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';
import { CounterScheme } from '../../type/counterScheme';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);
