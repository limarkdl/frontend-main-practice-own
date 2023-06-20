import type {Meta, StoryObj} from '@storybook/react';
import {SBThemeProvider} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Button, ButtonTheme} from './Button';
import '../../../app/styles/index.css';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
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
ClearBt.decorators = [SBThemeProvider(Theme.LIGHT)]

export const ClearBtDark: Story = {
    name: 'Clear Dark',
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },

};
ClearBtDark.decorators = [SBThemeProvider(Theme.DARK)]

export const PrimaryBt: Story = {
    name: 'Primary',
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};
PrimaryBt.decorators = [SBThemeProvider(Theme.LIGHT)]

export const PrimaryBtDark: Story = {
    name: 'Primary Dark',
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};
PrimaryBtDark.decorators = [SBThemeProvider(Theme.DARK)]

export const OutlineBt: Story = {
    name: 'Outline',
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
OutlineBt.decorators = [SBThemeProvider(Theme.LIGHT)]

export const OutlineBtDark: Story = {
    name: 'Outline Dark',
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
OutlineBtDark.decorators = [SBThemeProvider(Theme.DARK)]
