import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slicce/counterSlice';

describe('counterSlice.test', () => {
    test('test decrement in counterReducer', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('test increment in counterReducer', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
