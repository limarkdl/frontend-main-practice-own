import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import cls from './NotFoundPage.module.css';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.IconsContainer}>
                <FontAwesomeIcon icon={faSearch} size="4x" />
                <FontAwesomeIcon icon={faFaceFrown} size="8x" />
            </div>
            <h1>Error 404</h1>
            {t('NotFoundPageText')}
        </div>
    );
};

export default NotFoundPage;
