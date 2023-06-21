import { Theme } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`} style={{ display: 'block' }}>
        <Story />
    </div>
);
