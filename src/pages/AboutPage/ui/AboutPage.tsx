import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <h1>{t('AboutPage')}</h1>
            <p>{t('AboutPageDescription')}</p>
            <a
                target="_blank"
                href="https://github.com/limarkdl/frontend-main-practice-own"
                rel="noreferrer"
            >
                <code>
                    https://github.com/limarkdl/frontend-main-practice-own

                </code>
            </a>
        </div>
    );
};

export default AboutPage;
