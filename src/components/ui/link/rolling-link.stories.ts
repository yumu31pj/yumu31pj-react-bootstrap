import type { Meta, StoryObj } from '@storybook/react';
import { RollingLink } from './rolling-link';

const meta: Meta<typeof RollingLink> = {
  title: 'ui/Links/RollingLink',
  component: RollingLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof RollingLink>;

export const Primary: Story = {
  args: {
    linkText: "Rolling Link",
    linkTo: "*",
  },
};
