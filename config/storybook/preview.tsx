import type { Preview, StoryObj } from '@storybook/react';
import 'app/styles/index.css';
import { withI18next } from '../../src/shared/config/storybook/withI18next/with18next';

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
    decorators: [withI18next,
        (Story) => (
            <div style={{ padding: '0 !important', margin: '0 !important', border: 'none !important' }}>
                <Story />
            </div>
        ),
    ],

};

export default preview;