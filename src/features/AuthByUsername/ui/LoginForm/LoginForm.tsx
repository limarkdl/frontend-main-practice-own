import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.css';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h3 style={{textAlign: 'center', marginBottom: "14px"}}>{t('Authorization')}</h3>
            <div className={cls.inputGroup}>
                <input type="text" required autoComplete="off" />
                <label htmlFor="username">Username</label>
            </div>
            <div className={cls.inputGroup}>
                <input type="password" required autoComplete="off" />
                <label htmlFor="password">Password</label>
            </div>
            <Button className={cls.loginBtn} theme={ButtonTheme.PRIMARY}>
                {t('Log_in_Btn')}
            </Button>

        </div>
    );
};