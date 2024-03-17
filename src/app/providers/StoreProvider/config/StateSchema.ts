import {CounterSchema} from 'entities/Counter/modal/type/counterSchema';

export interface CounterState {
    value: number;
}
export interface StateSchema {
    counter: CounterSchema
}