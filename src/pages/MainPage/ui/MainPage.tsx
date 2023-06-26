import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Link } from 'react-router-dom';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppLink from 'shared/ui/AppLink/AppLink';
import { Simulate } from 'react-dom/test-utils';
import click = Simulate.click;
import Counter from "entities/Counter/ui/Counter";

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
                <AppLink to="/abrakadabra">
                    <Button theme={ButtonTheme.PRIMARY}>
                        404 ERROR
                    </Button>
                </AppLink>

            </div>
            <br />
            <br />
            <Counter />

        </div>
    );
};

export default MainPage;
