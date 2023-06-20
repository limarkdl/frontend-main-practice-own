import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.css';

import {SBThemeProvider} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
    title: 'ui/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarEl: Story = {
    name: 'Sidebar',
};
SidebarEl.decorators = [SBThemeProvider(Theme.LIGHT)]

export const SidebarElDark: Story = {
    name: 'Sidebar Dark',
};
SidebarElDark.decorators = [SBThemeProvider(Theme.DARK)]
