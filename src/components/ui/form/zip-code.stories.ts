import type { Meta, StoryObj } from '@storybook/react';
import { ZipCode } from './zip-code';

const meta: Meta<typeof ZipCode> = {
  title: 'ui/Forms/ZipCode',
  component: ZipCode,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ZipCode>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Zip Code",
    placeholder: "Input your zip code"
  },
};
