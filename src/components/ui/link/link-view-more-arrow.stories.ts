import type { Meta, StoryObj } from '@storybook/react';
import { LinkViewMoreArrow } from './link-view-more-arrow';

const meta: Meta<typeof LinkViewMoreArrow> = {
  title: 'ui/Links/LinkViewMoreArrow',
  component: LinkViewMoreArrow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkViewMoreArrow>;

export const Primary: Story = {
  args: {
    linkText: "View More",
    linkTo: "*",
  },
};