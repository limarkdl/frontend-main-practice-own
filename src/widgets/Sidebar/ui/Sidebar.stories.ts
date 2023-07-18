import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.css';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarEl: Story = {
    name: 'Sidebar',
};
SidebarEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SidebarElDark: Story = {
    name: 'Sidebar Dark',
};
SidebarElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SidebarElDarkBlue: Story = {
    name: 'Sidebar Dark Blue',
};
SidebarElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];

export const SidebarElOpened: Story = {
    name: 'Sidebar Opened',
    args: {
        isCollapsed: false,
    },

};
SidebarElOpened.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SidebarElDarkOpened: Story = {
    name: 'Sidebar Dark Opened',
    args: {
        isCollapsed: false,
    },

};
SidebarElDarkOpened.decorators = [ThemeDecorator(Theme.DARK)];

export const SidebarElDarkBlueOpened: Story = {
    name: 'Sidebar Dark Blue Opened',
    args: {
        isCollapsed: false,
    },
};
SidebarElDarkBlueOpened.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
