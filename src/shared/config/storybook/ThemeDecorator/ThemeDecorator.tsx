import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`} style={{ height: '100vh', width: '100%' }}>
            <Story />
        </div>
    </ThemeProvider>

);
