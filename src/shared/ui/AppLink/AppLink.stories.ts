import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkLight: Story = {
    name: 'Light',
    args: {
        children: 'AppLink',
    },
};
AppLinkLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const AppLinkDark: Story = {
    name: 'Dark',
    args: {
        children: 'AppLink',
    },
};
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
