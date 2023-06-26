import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.css';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <h2 className={cls.name}>
                {t('NameLogo')}
                🦆
            </h2>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => { onToggleModal(); }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid animi aperiam consectetur dicta dolorum ex exercitationem explicabo fugit laudantium molestiae nihil nisi nobis numquam quis similique ut veritatis voluptates.
            </Modal>
        </div>
    );
};

export default Navbar;
