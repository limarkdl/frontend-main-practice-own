import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.css';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: theme }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
