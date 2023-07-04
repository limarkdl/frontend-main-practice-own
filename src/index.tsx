import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';
import 'app/styles/index.css';

const safeBasename = __BASENAME__ || '';

render(
    <StoreProvider>
        <BrowserRouter basename={safeBasename}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
