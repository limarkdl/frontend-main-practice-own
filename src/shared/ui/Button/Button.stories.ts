import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ClearBt: Story = {
    name: 'Clear',
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },

};
ClearBt.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearBtDark: Story = {
    name: 'Clear Dark',
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },

};
ClearBtDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBt: Story = {
    name: 'Primary',
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};
PrimaryBt.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryBtDark: Story = {
    name: 'Primary Dark',
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};
PrimaryBtDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBt: Story = {
    name: 'Outline',
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
OutlineBt.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineBtDark: Story = {
    name: 'Outline Dark',
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
OutlineBtDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundBt: Story = {
    name: 'Background',
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
};
BackgroundBt.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundBtDark: Story = {
    name: 'Background Dark',
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
};
BackgroundBtDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquaredBt: Story = {
    name: 'Squared',
    args: {
        square: true,
        theme: ButtonTheme.PRIMARY,
        children: 'BT',
    },
};
SquaredBt.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquaredBtDark: Story = {
    name: 'Squared Dark',
    args: {
        square: true,
        theme: ButtonTheme.PRIMARY,
        children: 'BT',
    },
};
SquaredBtDark.decorators = [ThemeDecorator(Theme.DARK)];
