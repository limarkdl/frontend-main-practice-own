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
                {/* eslint-disable-next-line i18next/no-literal-string */}
                https://github.com/limarkdl/frontend-main-practice-own
            </a>
        </div>
    );
};

export default AboutPage;
