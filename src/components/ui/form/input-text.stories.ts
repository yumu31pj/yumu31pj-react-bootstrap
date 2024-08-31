import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './input-text';

const meta: Meta<typeof InputText> = {
  title: 'ui/Forms/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Text",
    placeholder: "Input text"
  },
};
