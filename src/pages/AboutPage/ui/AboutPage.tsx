import { useTranslation } from 'react-i18next';
import { Separator } from 'widgets/Separator';
import { FaGithub } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';
import FakeMap from 'shared/assets/MapWidgetFake.png';

/* eslint-disable */

const HGapStyle = { marginBottom: '10px' };
const PMarginLStyle = { marginBottom: '20px', marginLeft: '10px' };

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', paddingBottom: '40px',
        }}
        >
            <h1>{t('Contact us')}</h1>
            <Separator />
            <div style={{
                display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '20px', flexWrap: 'wrap',
            }}
            >
                <img src={FakeMap} alt="Map widget" width={333} height={250} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p>Address: University Ave 12-14, Pyla 7080</p>
                    <p>Open hours: from Monday to Friday, 9:00 AM to 17:00 PM</p>
                    <p>Phone: +357 XX XXXXXX</p>
                    <p>E-Mail: main@uclanmerchshop.ac.cy</p>
                </div>
            </div>
            <h1>{t('AboutPageTitle')}</h1>
            <Separator />

            <h3 style={HGapStyle}>{t('Introduction')}</h3>
            <p style={PMarginLStyle}>{t('AboutPageDescriptionWelcome')}</p>
            <h3 style={HGapStyle}>{t('Our mission')}</h3>
            <p style={PMarginLStyle}>
                {t('AboutPageDescriptionMission')}
                {' '}
                {t('AboutPageDescriptionHistory')}
            </p>
            <h3 style={HGapStyle}>{t('Partnership')}</h3>
            <p style={PMarginLStyle}>
                {t('AboutPageDescriptionPartnership')}
                {' '}
                {t('AboutPageDescriptionSustainability')}
            </p>
            <h3 style={HGapStyle}>{t('Conclusion')}</h3>
            <p style={PMarginLStyle}>
                {t('AboutPageDescriptionStory')}
                {' '}
                {t('AboutPageDescriptionAudience')}
            </p>
            <h2 style={{ ...HGapStyle, ...{ textAlign: 'center', marginTop: '20px', marginBottom: '40px' } }}>
                {t('AboutPageDescriptionEnding')}
            </h2>

            <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center',
            }}
            >
                <h3>Created by:</h3>
                <a
                    target="_blank"
                    href="https://github.com/limarkdl-private/frontend-main-practice-own"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <FaGithub size="24px" />
                    &nbsp;@limarkdl-private/uclan-merch-shop
                    </span>
                </a>
                <a
                    target="_blank"
                    href="mailto:ikostin@uclan.ac.uk"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        <FaUserGraduate size="24px" />
                    &nbsp;ikostin@uclan.ac.uk
                    </span>
                </a>
            </div>

        </div>
    );
};

export default AboutPage;
