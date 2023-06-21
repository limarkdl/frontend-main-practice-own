import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <h1>{t('AboutPage')}</h1>
            <a
                style={{ fontSize: '32px' }}
                target="_blank"
                href="https://github.com/limarkdl/frontend-main-practice-own"
                rel="noreferrer"
            >
                https://github.com/limarkdl/frontend-main-practice-own
            </a>
            <p>{t('AboutPageDescription')}</p>
        </div>
    );
};

export default AboutPage;
