import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import AppLink from 'shared/ui/AppLink/AppLink';
import { Separator } from 'widgets/Separator';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>{t('MainPage')}</h1>
            <Separator />
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
