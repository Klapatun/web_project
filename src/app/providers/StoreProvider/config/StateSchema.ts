import { CounterSchema } from 'entities/Counter/modal/type/counterSchema';
import { UserSchema } from 'entities/User';

export interface CounterState {
    value: number;
}
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
