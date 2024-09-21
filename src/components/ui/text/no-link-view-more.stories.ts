import type { Meta, StoryObj } from '@storybook/react';
import { NoLinkViewMore } from './no-link-view-more';

const meta: Meta<typeof NoLinkViewMore> = {
  title: 'ui/Texts/NoLinkViewMore',
  component: NoLinkViewMore,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof NoLinkViewMore>;

export const Primary: Story = {
  args: {
    text: "View More",
  },
};