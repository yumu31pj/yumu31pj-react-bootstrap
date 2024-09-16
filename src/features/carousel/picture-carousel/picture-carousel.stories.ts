import type { Meta, StoryObj } from '@storybook/react';
import PictureCarousel from './picture-carousel';

const meta: Meta<typeof PictureCarousel> = {
  title: 'features/Carousel/PictureCarousel',
  component: PictureCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PictureCarousel>;

export const Default: Story = {
  args: {
    pictureItems: [
      {
        srcSP: "/src/assets/images/750x860.png",
        srcWebpSP: "/src/assets/images/750x860.webp",
        srcPC: "/src/assets/images/1920x520.png",
        srcWebpPC: "/src/assets/images/1920x520.webp",
        width: 375,
        height: 430,
        altText: "carouse1",
        breakpoint: 961
      },
      {
        srcSP: "/src/assets/images/750x860_2.png",
        srcWebpSP: "/src/assets/images/750x860_2.webp",
        srcPC: "/src/assets/images/1920x520_2.png",
        srcWebpPC: "/src/assets/images/1920x520_2.webp",
        width: 375,
        height: 430,
        altText: "carouse2",
        breakpoint: 961
      }
    ]
  },
};
