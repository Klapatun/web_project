import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className, children, theme = AppLinkTheme.PRIMARY, ...linkProps
}) => (
    <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} {...linkProps}>
        {children}
    </Link>
);
