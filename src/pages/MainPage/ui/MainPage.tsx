import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('MainPage')}</h1>
            <br />
            <BugButton />
        </div>
    );
};

export default MainPage;
