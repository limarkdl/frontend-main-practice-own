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

export const SidebarElCarrot: Story = {
    name: 'Sidebar Carrot',
};
SidebarElCarrot.decorators = [ThemeDecorator(Theme.CARROT)];

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


export const SidebarElCarrotOpened: Story = {
    name: 'Sidebar Carrot Opened',
    args: {
        isCollapsed: false,
    },
};
SidebarElCarrotOpened.decorators = [ThemeDecorator(Theme.CARROT)];