import type { Meta, StoryObj } from '@storybook/react';
import { Address } from './address';

const meta: Meta<typeof Address> = {
  title: 'ui/Forms/Address',
  component: Address,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Address>;

export const Default: Story = {
  args: {
    name: "email",
    labelText: "Your Address",
    placeholder: "Input your address"
  },
};
