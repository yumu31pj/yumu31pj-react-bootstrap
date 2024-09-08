import type { Meta, StoryObj } from '@storybook/react';
import { LinkLabel } from './link-label';

const meta: Meta<typeof LinkLabel> = {
  title: 'ui/Links/LinkLabel',
  component: LinkLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkLabel>;

export const Primary: Story = {
  args: {
    linkText: "Category",
    linkTo: "*",
  },
};
