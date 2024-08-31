import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'ui/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "checkbox",
    name: "Checkbox",
    value: "Checkbox1",
    text: "Checkbox1"
  },
};
