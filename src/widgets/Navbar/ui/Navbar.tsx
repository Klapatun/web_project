import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			{/*<ThemeSwitchr />*/}
			<div className={classNames(cls.links)}>
				/
			</div>
		</div>
	);
};