import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from './submit-button';

const meta: Meta<typeof SubmitButton> = {
  title: 'ui/Forms/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Primary: Story = {
  args: {
    buttonText: "Send"
  }
};
