import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Link } from 'react-router-dom';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('WEBSITE IS UNDER CONSTRUCTION')}</h2>
            <br />
            <FontAwesomeIcon icon={faPersonDigging} size="5x" />
            <br />
            <br />

            <h3>{t('DebugTools')}</h3>
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
