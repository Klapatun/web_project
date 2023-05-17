import cls from './Sidebar.module.scss';
import {useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				cls.Sidebar,
				{[cls.collapsed]: collapsed},
				[className]
			)}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.XL}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} short={collapsed}/>
			</div>
		</div>
	);
};