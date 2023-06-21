import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
// import PageErrorIllustration from 'shared/assets/Group.svg';
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
        <div
            className={
                classNames(cls.PageError, {}, [className])
            }
        >
            {/* <PageErrorIllustration /> */}
            <div className={cls.PageErrorContainer}>
                <h1 className={cls.ErrorMessage}>
                    {t('PageErrorMessage')}
                </h1>
                <p className={cls.Apologizing}>
                    {t('PageErrorApologizing')}

                </p>
                <Button
                    onClick={reloadPage}
                    className={cls.ReloadButton}
                >
                    {t('PageErrorTryAgain')}
                </Button>
            </div>
        </div>
    );
};

export default PageError;
