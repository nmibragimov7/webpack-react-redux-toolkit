import { CounterScheme } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('should return value after decrement', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state as CounterScheme, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('should return value after increment', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state as CounterScheme, counterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('should return 1 with undefined', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
