import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'ui/Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    name: "select",
    labelText: "Select",
    isRequired: false,
    selectItems: [
      {valueText: "select1", displayText: "Select 1"},
      {valueText: "select2", displayText: "Select 2"},
    ]
  },
};
