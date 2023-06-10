import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.css';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        // <div className={classNames(cls.PageError, {}, [className])}>
        //     <h1>{t('Something went wrong!')}</h1>
        //     <Button onClick={reloadPage}>
        //         {t('Reload page')}
        //     </Button>
        // </div>
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1 className="text-2xl font-bold text-red-500">
                {t('PageErrorMessage')}
            </h1>
            <p className="mt-4 mb-6">
                {t('PageErrorApologizing')}

            </p>
            <Button
                onClick={reloadPage}
                className="px-6 py-3 text-white bg-blue-700 rounded hover:bg-blue-500"
            >
                {t('PageErrorTryAgain')}
            </Button>
        </div>
    );
};

export default PageError;
