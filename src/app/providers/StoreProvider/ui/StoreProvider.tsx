import {FC} from 'react';
import { Provider } from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema';

interface Props {
	initialState?: StateSchema;
}
export const StoreProvider: FC<Props> = ({children, initialState}) => {

	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};