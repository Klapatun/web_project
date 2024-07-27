import { CounterSchema } from 'entities/Counter/modal/type/counterSchema';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface CounterState {
    value: number;
}
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}
