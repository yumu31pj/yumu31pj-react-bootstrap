import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './close-button';

const meta: Meta<typeof CloseButton> = {
  title: 'ui/Buttons/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {
  },
};
