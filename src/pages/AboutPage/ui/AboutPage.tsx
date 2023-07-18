import { useTranslation } from 'react-i18next';
import { Separator } from 'widgets/Separator';
import { FaGithub } from 'react-icons/fa';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', paddingBottom: '40px',
        }}
        >
            <h1>{t('AboutPage')}</h1>
            <Separator />

            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionWelcome')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionMission')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionHistory')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionPartnership')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionSustainability')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionStory')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionAudience')}</p>
            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescriptionEnding')}</p>
            <a
                target="_blank"
                href="https://github.com/limarkdl-private/frontend-main-practice-own"
                rel="noreferrer"
            >
                <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <FaGithub size="24px" />
&nbsp;@limarkdl-private/uclan-merch-shop
                </span>
            </a>

        </div>
    );
};

export default AboutPage;
