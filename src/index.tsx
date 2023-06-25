import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';

const safeBasename = __BASENAME__ || '';

console.log('safeBasename', safeBasename);

render(
    <BrowserRouter basename={safeBasename}>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
