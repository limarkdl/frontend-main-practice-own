import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoryFn } from '@storybook/react';
import i18n from '../../i18n/i18n';

// Wrap your stories in the I18nextProvider component
export const withI18next = (Story: StoryFn) => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>LOADING TRANSLATIONS...</div>}>
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    </Suspense>
);

export const decorators = [withI18next];
