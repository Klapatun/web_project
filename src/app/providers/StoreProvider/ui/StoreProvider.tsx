import {FC} from 'react';
import { Provider } from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema';
import {DeepPartial} from '@reduxjs/toolkit';

interface Props {
	initialState?: DeepPartial<StateSchema>;
}
export const StoreProvider: FC<Props> = ({children, initialState}) => {

	const store = createReduxStore(initialState as StateSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};