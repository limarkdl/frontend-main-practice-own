import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <h1 className={cls.name}>LIMARKDL</h1>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>{t('MainLink')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={cls.aboutLink}>{t('AboutLink')}</AppLink>
            </div>

        </div>
    );
};

export default Navbar;
