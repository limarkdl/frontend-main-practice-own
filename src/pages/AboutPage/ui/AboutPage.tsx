import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', gap: '10px', flexDirection: 'column', paddingBottom: '40px',
        }}
        >
            <h1>{t('AboutPage')}</h1>
            <p>{t('AboutPageDescription')}</p>
            <a
                target="_blank"
                href="https://github.com/limarkdl/frontend-main-practice-own"
                rel="noreferrer"
            >
                <span style={{ color: 'var(--inverted-bg-color)' }}>
                    https://github.com/limarkdl/frontend-main-practice-own
                </span>
            </a>
            <br />

            {/* NEVER DO LIKE THIS, IT"S TEMPORARY JUST FOR BEAUTY AND CONTENT*/}
            <h2>Already used technologies & concepts:</h2>
            <ul >
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>"Feature-Sliced Design" methodology</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Webpack 5</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>React 17</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>TypeScript</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Redux ToolKit</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>CSS Modules</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Babel</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Storybook 7</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>React-Router-Dom</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>React Testing Library</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Loki</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>JEST</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Json-server (for developing)</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>ErrorBoundary</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>i18next</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Lazy loading</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>CSS/TS Chunks</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Custom UI components library</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>ESLint</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>StyleLint</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>GitActions</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>CI/CD Pipeline</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Webpack bundle analyzer</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Loki html report difference</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Theme providers</li>
                <li style={{marginLeft: "16px", marginBottom: "4px"}}>Portals</li>
            </ul>

        </div>
    );
};

export default AboutPage;
