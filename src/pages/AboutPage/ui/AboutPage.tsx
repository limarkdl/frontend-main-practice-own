import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div>
            {t('AboutPage')}
        </div>
    );
};

export default AboutPage;
