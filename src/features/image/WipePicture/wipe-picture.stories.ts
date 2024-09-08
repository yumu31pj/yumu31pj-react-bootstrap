import type { Meta, StoryObj } from '@storybook/react';
import WipePicture from './wipe-picture';

const meta: Meta<typeof WipePicture> = {
  title: 'features/images/WipePicture',
  component: WipePicture,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WipePicture>;

export const Default: Story = {
  args: {
    srcSP: "/src/assets/images/750x860.png",
    srcWebpSP: "/src/assets/images/750x860.webp",
    srcPC: "/src/assets/images/1920x520.png",
    srcWebpPC: "/src/assets/images/1920x520.webp",
    width: 375,
    height: 430,
    altText: "carouse1",
    breakpoint: 961
  },
};
