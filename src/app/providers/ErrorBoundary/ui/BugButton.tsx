import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import cls from './BugButton.module.css';

interface BugButtonProps {
    className?: string;
}

const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Test error');
        }
    }, [error]);

    return (
        <div className={classNames('', {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button className={cls.BugButton} onClick={throwError} theme={ButtonTheme.PRIMARY}>{t('BugBt')}</Button>
        </div>
    );
};

export default BugButton;
