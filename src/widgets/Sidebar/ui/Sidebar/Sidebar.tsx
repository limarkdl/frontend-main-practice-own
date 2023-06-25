import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

import { LangSwitcher } from 'shared/ui/LangSwitcher';
import AppLink from 'shared/ui/AppLink/AppLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(
            cls.Sidebar,
            { [cls.collapsed]: collapsed },
            [className],
        )}
        >
            <div className={cls.Items}>

                <AppLink className={cls.Links} to="/">
                    <FontAwesomeIcon icon={faHome} size="xl" />
                    <span>
                        {t('MainLink')}
                    </span>
                </AppLink>
                <AppLink className={cls.Links} to="/about">
                    <FontAwesomeIcon icon={faCircleInfo} size="xl" />
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
