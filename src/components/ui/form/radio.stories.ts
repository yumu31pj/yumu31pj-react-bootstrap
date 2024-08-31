import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'ui/Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "radio",
    value: "radio1",
    text: "Radio 1"
  },
};
