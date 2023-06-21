import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
