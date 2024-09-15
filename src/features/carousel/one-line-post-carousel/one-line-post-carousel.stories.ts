import type { Meta, StoryObj } from '@storybook/react';
import OneLinePostCarousel from './one-line-post-carousel';


const meta: Meta<typeof OneLinePostCarousel> = {
  title: 'features/Carousel/OneLinePostCarousel',
  component: OneLinePostCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof OneLinePostCarousel>;

export const Default: Story = {
  args: {
    postItems: [
      {
        title: 'Post Title 3',
        date: "2024/09/03",
        linkTo: "#",
      },
      {
        title: 'Post Title 2',
        date: "2024/09/02",
        linkTo: "#"
      },
      {
        title: 'Post Title 1',
        date: "2024/09/01",
        linkTo: "#"
      }
    ],
    linkPath: "news/posts?id="
  },
};

export const Horizon: Story = {
  args: {
    postItems: [
      {
        title: 'Post Title 3',
        date: "2024/09/03",
        linkTo: "#"
      },
      {
        title: 'Post Title 2',
        date: "2024/09/02",
        linkTo: "#"
      },
      {
        title: 'Post Title 1',
        date: "2024/09/01",
        linkTo: "#"
      }
    ],
    direction: 'horizon',
    linkPath: "news/posts?id="
  },
};

export const Vertical: Story = {
  args: {
    postItems: [
      {
        title: 'Post Title 3 Post Title 3 Post Title 3',
        date: "2024/09/03",
        linkTo: "#"
      },
      {
        title: 'Post Title 2',
        date: "2024/09/02",
        linkTo: "#"
      },
      {
        title: 'Post Title 1',
        date: "2024/09/01",
        linkTo: "#"
      }
    ],
    direction: 'vertical',
    linkPath: "news/posts?id="
  },
};