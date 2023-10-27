import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {Suspense, useState} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';

export const App = () => {
	const { theme } = useTheme();

	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<div>Loading...</div>}>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
