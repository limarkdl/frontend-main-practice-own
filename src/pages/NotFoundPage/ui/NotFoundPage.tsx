import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { FaFaceFrown } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import cls from './NotFoundPage.module.css';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.IconsContainer}>
                <FaSearch size="48px" />
                <FaFaceFrown size="124px" />
            </div>
            <h1>{t('Error 404')}</h1>
            {t('NotFoundPageText')}
        </div>
    );
};

export default NotFoundPage;
