import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NevbarProps {
    className?: string;
}

export const Navbar = ({className}: NevbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			{/*<ThemeSwitchr />*/}
			<div className={classNames(cls.links)}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
			</div>
		</div>
	);
};