import type { Meta, StoryObj } from '@storybook/react';
import { ModalProvider } from '../../contexts/ModalContext';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'features/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => (
    <ModalProvider>
      <Modal {...args} />
    </ModalProvider>
  ),
  args: {
    type: "contact",
    children: (
      <>
        <div>Test</div>
      </>
    ),
  },
};
