import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Link } from 'react-router-dom';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('DebugTools')}</h2>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <BugButton />
                <br />
                <Button theme={ButtonTheme.PRIMARY}>
                    <Link to="/abrakadabra">404 ERROR</Link>
                </Button>
            </div>

        </div>
    );
};

export default MainPage;
