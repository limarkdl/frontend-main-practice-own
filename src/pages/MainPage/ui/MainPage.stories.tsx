import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLight: Story = {
    name: 'Light',
};
MainPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const MainPageDark: Story = {
    name: 'Dark',
};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
