import type { Meta, StoryObj } from '@storybook/react';
import { Password } from './password';

const meta: Meta<typeof Password> = {
  title: 'ui/Forms/Password',
  component: Password,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Your Password",
    // placeholder: "Input your Password"
  },
};
