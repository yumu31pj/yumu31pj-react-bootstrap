import type { Meta, StoryObj } from '@storybook/react';
import { LinkViewMore } from './link-view-more';

const meta: Meta<typeof LinkViewMore> = {
  title: 'ui/Links/LinkViewMore',
  component: LinkViewMore,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkViewMore>;

export const Primary: Story = {
  args: {
    linkText: "View More",
    linkTo: "*",
  },
};