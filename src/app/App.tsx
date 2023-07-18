import './styles/index.css';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';

const Skeleton = () => (
    <div style={{ height: '100vh', width: '100vw', animation: 'breathe 2s ease-in-out infinite' }}>
        <div style={{
            height: 'var(--navbar-height)',
            background: 'var(--inverted-bg-color)',
            width: '100vw',
        }}
        />
        <div style={{
            position: 'relative',
            width: 'var(--sidebar-width-collapsed)',
            background: 'var(--sidebar-bg-color)',
            height: 'calc(100dvh - var(--navbar-height))',
        }}
        >
            <div style={{
                position: 'absolute',
                padding: '30px 4px 30px 4px',
                lineHeight: 'var(--font-line-m)',
                fontSize: 'var(--font-size-m)',
                background: '#313131',
                borderRadius: '10px',
                display: 'inline-block',
                boxSizing: 'border-box',
                top: 'calc(50dvh - var(--navbar-height) - 30px)',
                right: '-10px',
                color: '#313131',
            }}
            >
                {'>'}
            </div>
        </div>

    </div>
);

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Skeleton />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
