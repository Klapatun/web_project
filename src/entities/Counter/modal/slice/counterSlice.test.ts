import { CounterState } from 'app/providers/StoreProvider/config/StateSchema';
import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    it('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterState, counterActions.decrement())).toEqual({ value: 9 });
    });

    it('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterState, counterActions.increment())).toEqual({ value: 11 });
    });

    it('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
