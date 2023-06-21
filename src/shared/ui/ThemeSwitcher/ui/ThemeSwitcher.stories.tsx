import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,

};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherLight: Story = {
    name: 'ThemeSwitcher Light',
};
ThemeSwitcherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ThemeSwitcherDark: Story = {
    name: 'ThemeSwitcher Dark',
};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
