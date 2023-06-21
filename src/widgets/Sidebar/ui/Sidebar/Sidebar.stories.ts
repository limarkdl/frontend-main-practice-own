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
