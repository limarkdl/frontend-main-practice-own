import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import AppLink from 'shared/ui/AppLink/AppLink';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { GrContactInfo } from 'react-icons/gr';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
    isCollapsed?: boolean;
}

export const Sidebar = ({ className, isCollapsed = true }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(isCollapsed);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={cls.Items}>

                <AppLink className={cls.Links} to="/">
                    <div className={cls.IconContainer}>
                        <FaHome size="28px" />
                    </div>
                    <span>
                        {t('MainLink')}
                    </span>
                </AppLink>
                <AppLink className={cls.Links} to="/about">
                    <div className={cls.IconContainer}>
                        <FaInfoCircle size="24px" />
                    </div>
                    <span>
                        {t('AboutLink')}
                    </span>
                </AppLink>

            </div>
            <Button theme={ButtonTheme.PRIMARY} className={cls.ToggleBt} onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
