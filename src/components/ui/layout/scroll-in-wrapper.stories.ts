import type { Meta, StoryObj } from '@storybook/react';
import { ScrollInWrapper } from './scroll-in-wrapper';

const meta: Meta<typeof ScrollInWrapper> = {
  title: 'ui/Layouts/ScrollInWrapper',
  component: ScrollInWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScrollInWrapper>;

export const Default: Story = {
  args: {
    type: "div",
    children: "components"
  },
};
