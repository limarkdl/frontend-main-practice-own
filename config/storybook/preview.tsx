import type { Preview, StoryObj } from '@storybook/react';
import '../../src/app/styles/index.css';
import { withI18next } from '../../src/shared/config/storybook/withI18next/with18next';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withI18next,
        RouterDecorator,
    ],

};

export default preview;
