import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
  title: 'ui/Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Textarea",
    // placeholder: "Input your text in this textarea"
  },
};
