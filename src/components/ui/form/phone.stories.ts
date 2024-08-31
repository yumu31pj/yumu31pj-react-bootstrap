import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from './phone';

const meta: Meta<typeof Phone> = {
  title: 'ui/Forms/Phone',
  component: Phone,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Phone>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Your Phone Number",
    placeholder: "Input your Phone number"
  },
};
