import type { Meta, StoryObj } from '@storybook/react';
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
