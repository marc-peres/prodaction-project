import { Counter } from 'entities/Counter/ui/Counter';
import { counterReducer } from './model/slicce/counterSlice';
import { CounterSchema } from './model/types/counterSchema';

export {
    CounterSchema,
    Counter,
    counterReducer,
};
