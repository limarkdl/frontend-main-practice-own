import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from 'pages/NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {
    name: 'Light',
};
NotFoundPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NotFoundPageDark: Story = {
    name: 'Dark',
};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
