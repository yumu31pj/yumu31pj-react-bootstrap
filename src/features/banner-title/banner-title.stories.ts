import type { Meta, StoryObj } from '@storybook/react';
import BannerTitle from './banner-title';


const meta: Meta<typeof BannerTitle> = {
  title: 'features/BannerTitle',
  component: BannerTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof BannerTitle>;

export const Default: Story = {
  args: {
    imageItem: {
      srcPC: "/src/assets/images/1200x900.png",
      srcSP: "/src/assets/images/1200x900.png",
      srcWebpPC: "/src/assets/images/1200x900.webp",
      srcWebpSP: "/src/assets/images/1200x900.webp",
      width: 720,
      height: 450,
      altText: "",
      breakpoint: 521
    },
    titleItem: {
      tag: "h2",
      text: "This is Section Title"
    },
    linkText: "View More"
  }
};