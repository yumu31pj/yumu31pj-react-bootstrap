import type { Meta, StoryObj } from '@storybook/react';
import { Picture } from './picture';

const meta: Meta<typeof Picture> = {
  title: 'ui/Images/Picture',
  component: Picture,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Picture>;

export const Default: Story = {
  args: {
    srcSP: "/src/assets/images/brand_logo.png",
    srcWebpPC: "/src/assets/images/brand_logo.png.webp",
    srcPC: "/src/assets/images/brand_logo.png",
    srcWebpSP: "/src/assets/images/brand_logo.png.webp",
    altText: "Storybook",
    breakpoint: 961
  },
};
