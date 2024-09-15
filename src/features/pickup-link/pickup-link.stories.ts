import type { Meta, StoryObj } from '@storybook/react';
import PickupLink from './pickup-link';

const meta: Meta<typeof PickupLink> = {
  title: 'features/PickupLink',
  component: PickupLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PickupLink>;

export const Default: Story = {
  args: {
    titleItem: {
      tag: "h2",
      text: "New Campaign Arrival",
    },
    text: "We've jsut released PickupLink component.<br>Please try this and give me your opinion",
    linkItem: {
      linkText: "View More",
      linkTo: "https://github.com/yumu31pj/yumu31pj-react-bootstrap",
      isExternal: true
    }
  },
};
