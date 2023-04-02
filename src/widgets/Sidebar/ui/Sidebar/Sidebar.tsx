import cls from './Sidebar.module.scss'
import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div
            className={classNames(
                cls.Sidebar,
                {[cls.collapsed]: collapsed},
                [className]
            )}
        >
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*LangSwitcher*/}
            </div>
        </div>
    );
}