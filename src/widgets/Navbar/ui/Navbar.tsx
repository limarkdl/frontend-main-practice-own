import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.css';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.name}>
                <img
                    src="https://limarkdluclanshopstatic.blob.core.windows.net/public/logo.png"
                    alt="Logo"
                    height="100%"
                    width="auto"
                />

            </div>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                style={{ marginRight: '-16px' }}
            >
                {t('Log_in')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default Navbar;
