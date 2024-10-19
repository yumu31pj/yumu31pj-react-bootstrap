import type { Meta, StoryObj } from '@storybook/react';
import CardLink from './card-link';

const meta: Meta<typeof CardLink> = {
  title: 'features/Cards/CardLink',
  component: CardLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CardLink>;

export const Default: Story = {
  args: {
    cardItem: {
      title: "New Goods Arrival",
      text: "New Goods has just released.<br>You must like it!",
      backgroundImage: "/src/assets/images/750x750_noimg.png",
      buttonText: "View More",
      linkTo: "#"
    }
  },
};
