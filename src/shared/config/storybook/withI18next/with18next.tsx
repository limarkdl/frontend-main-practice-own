import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoryFn } from '@storybook/react';
import i18n from '../../i18n/i18n';

// Wrap your stories in the I18nextProvider component
export const withI18next = (Story: StoryFn) => (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>Loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    </Suspense>
);

// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];
