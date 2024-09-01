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

export const Unconfirmed: Story = {
  args: {
    buttonText: {
      initText: "Confirm",
      submitText: "Send"
    },
    isConfirmd: false
  },
};

export const Confirmed: Story = {
  args: {
    buttonText: {
      initText: "Confirm",
      submitText: "Send"
    },
    isConfirmd: true
  },
};
