import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarEl: Story = {
    name: 'Navbar',

};
NavbarEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NavbarElDark: Story = {
    name: 'Navbar Dark',
};
NavbarElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NavbarElDarkBlue: Story = {
    name: 'Navbar Dark Blue',
};
NavbarElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
