import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary';
import {Counter} from 'entities/Counter';

export const MainPage = () => {
	const {t} = useTranslation('main');

	return (
		<div>
			{t('MAIN_PAGE')}
			<Counter />
		</div>
	);
};
