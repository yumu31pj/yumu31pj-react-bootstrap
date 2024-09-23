import type { Meta, StoryObj } from '@storybook/react';
import TitleBandArticle from './title-band-article';


const meta: Meta<typeof TitleBandArticle> = {
  title: 'features/Cards/TitleBandArticle',
  component: TitleBandArticle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleBandArticle>;

export const Default: Story = {
  args: {
    linkItem: {
      linkText: "Text Text Text Text Text Text Text Text Text",
      linkTo: "#"
    },
    imageItem: {
      srcSP: "/src/assets/images/750x750.png",
      srcWebpSP: "/src/assets/images/750x750.webp",
      srcPC: "/src/assets/images/750x750.png",
      srcWebpPC: "/src/assets/images/750x750.webp",
      width: 375,
      height: 430,
      altText: "title-band-article",
      breakpoint: 961
    }
  },
};