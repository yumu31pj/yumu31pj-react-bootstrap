import type { Meta, StoryObj } from '@storybook/react';
import { ScrollInContent } from './scroll-in-wrapper';

const meta: Meta<typeof ScrollInContent> = {
  title: 'ui/Layouts/ScrollInContent',
  component: ScrollInContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScrollInContent>;

export const Default: Story = {
  args: {
    type: "div",
    children: "components"
  },
};
