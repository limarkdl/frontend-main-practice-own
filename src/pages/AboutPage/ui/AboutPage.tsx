import { useTranslation } from 'react-i18next';
import { Separator } from 'widgets/Separator';
/* eslint-disable */
const styledLI = { marginLeft: '16px', marginBottom: '4px' };

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', paddingBottom: '40px',
        }}
        >
            <h1>{t('AboutPage')}</h1>
            <Separator />

            <p style={{ marginBottom: '20px' }}>{t('AboutPageDescription')}</p>
            <a
                target="_blank"
                href="https://github.com/limarkdl-private/frontend-main-practice-own"
                rel="noreferrer"
            >
                <span style={{ color: 'var(--inverted-bg-color)' }}>
                    https://github.com/limarkdl-private/frontend-main-practice-own
                </span>
            </a>
            <Separator />
            {/* NEVER DO LIKE THIS, IT"S TEMPORARY JUST FOR BEAUTY AND CONTENT */}
            <h2 style={{ marginBottom: '20px' }}>{t('aboutPage:usedTechnologies')}</h2>
            <ul>
                <li style={styledLI}>React 17</li>
                <li style={styledLI}>TypeScript</li>
                <li style={styledLI}>CSS Modules</li>
                <br />
                <li style={styledLI}>"Feature-Sliced Design" methodology</li>
                <li style={styledLI}>ErrorBoundary</li>
                <li style={styledLI}>Lazy loading</li>
                <li style={styledLI}>CSS/TS Chunks</li>
                <li style={styledLI}>Custom UI Components library</li>
                <li style={styledLI}>Theme providers</li>
                <li style={styledLI}>Portals</li>
                <br />
                <li style={styledLI}>Webpack 5</li>
                <li style={styledLI}>Babel</li>
                <li style={styledLI}>Webpack Bundle Analyzer</li>
                <br />
                <li style={styledLI}>React-Router-Dom</li>
                <li style={styledLI}>Redux ToolKit</li>
                <br />
                <li style={styledLI}>i18next</li>
                <br />
                <li style={styledLI}>React Testing Library</li>
                <li style={styledLI}>JEST</li>
                <li style={styledLI}>ESLint</li>
                <li style={styledLI}>StyleLint</li>
                <br />
                <li style={styledLI}>Storybook 7</li>
                <br />
                <li style={styledLI}>GitActions</li>
                <li style={styledLI}>CI/CD Pipeline</li>
                <br />
                <li style={styledLI}>Json-server (dev)</li>
                <li style={styledLI}>Loki</li>
                <li style={styledLI}>Loki HTML Report</li>
            </ul>

        </div>
    );
};

export default AboutPage;
