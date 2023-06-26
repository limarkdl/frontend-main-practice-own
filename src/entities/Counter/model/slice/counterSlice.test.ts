import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from '../slice/counterSlice';

describe('counterSlice.test', () => {
    test('should return the counter state 11', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should return the counter state 9', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
