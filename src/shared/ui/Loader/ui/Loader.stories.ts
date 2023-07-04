import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from 'shared/ui/Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderLight: Story = {
    name: 'Light',
};
LoaderLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoaderDark: Story = {
    name: 'Dark',
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
