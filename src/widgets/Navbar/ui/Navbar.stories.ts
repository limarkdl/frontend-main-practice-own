import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import {SBThemeProvider} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from "app/providers/ThemeProvider";

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
NavbarEl.decorators = [SBThemeProvider(Theme.LIGHT)]

export const NavbarElDark: Story = {
    name: 'Navbar Dark',
};
NavbarElDark.decorators = [SBThemeProvider(Theme.DARK)]
