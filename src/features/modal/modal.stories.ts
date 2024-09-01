import type { Meta, StoryObj } from '@storybook/react';
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
  args: {
    children: "<h1>Title</h1><div><p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br></p></div>"
  },
};
