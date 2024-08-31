import type { Meta, StoryObj } from '@storybook/react';
import { Email } from './email';

const meta: Meta<typeof Email> = {
  title: 'ui/Forms/Email',
  component: Email,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Email>;

export const Default: Story = {
  args: {
    name: "email",
    labelText: "E-mail Address",
    placeholder: "Input your e-mail"
  },
};
