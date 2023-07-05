import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import AppLink from 'shared/ui/AppLink/AppLink';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('MainPage')}</h1>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <BugButton />
                <br />
                <AppLink to="/abrakadabra">
                    <Button theme={ButtonTheme.PRIMARY}>
                        404 ERROR
                    </Button>
                </AppLink>
            </div>
        </div>
    );
};

export default MainPage;
