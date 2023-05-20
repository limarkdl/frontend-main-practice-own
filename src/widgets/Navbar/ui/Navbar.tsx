import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.aboutLink}>About</AppLink>
            </div>
        <ThemeSwitcher />
        </div>
    );
};

export default Navbar;

