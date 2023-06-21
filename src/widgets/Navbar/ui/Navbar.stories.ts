import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'ui/Navbar',
    component: Navbar,
    decorators: [RouterDecorator],
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
