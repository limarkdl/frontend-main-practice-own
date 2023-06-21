import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';

const VESTA_MODE = false;

const BaseNamePath = VESTA_MODE ? '~ikostin/TestReactDeployment/' : '';

render(
    <BrowserRouter basename={BaseNamePath}>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
