import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
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
                🚧🦆🚧
            </h2>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={() => { onToggleModal(); }}>
                <FontAwesomeIcon style={{ margin: '24px' }} icon={faPersonDigging} size="7x" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur corporis cumque dolore ea eius excepturi expedita impedit itaque nemo non, odit, omnis placeat quibusdam recusandae reiciendis, sapiente tempora ut!
            </Modal>
        </div>
    );
};

export default Navbar;
