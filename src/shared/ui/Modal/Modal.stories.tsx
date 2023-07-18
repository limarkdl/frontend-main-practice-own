import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Modal from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalEl: Story = {
    name: 'Modal',
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid animi aperiam consectetur dicta dolorum ex exercitationem explicabo fugit laudantium molestiae nihil nisi nobis numquam quis similique ut veritatis voluptates.\n',
    },

};
ModalEl.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalElDark: Story = {
    name: 'Modal Dark',
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid animi aperiam consectetur dicta dolorum ex exercitationem explicabo fugit laudantium molestiae nihil nisi nobis numquam quis similique ut veritatis voluptates.\n',
    },

};
ModalElDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ModalElDarkBlue: Story = {
    name: 'Modal Dark Blue',
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid animi aperiam consectetur dicta dolorum ex exercitationem explicabo fugit laudantium molestiae nihil nisi nobis numquam quis similique ut veritatis voluptates.\n',
    },

};
ModalElDarkBlue.decorators = [ThemeDecorator(Theme.DARK_BLUE)];
