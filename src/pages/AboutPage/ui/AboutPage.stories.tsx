import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLight: Story = {
    name: 'Light',
};
AboutPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const AboutPageDark: Story = {
    name: 'Dark',
};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
