import type { Meta, StoryObj } from '@storybook/react';
import TitleBandArticles from './title-band-articles';


const meta: Meta<typeof TitleBandArticles> = {
  title: 'features/Articles/TitleBandArticles',
  component: TitleBandArticles,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleBandArticles>;

export const Default: Story = {
  args: {
    articles: [
      {
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
      {
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
      {
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
      }
    ]
  },
};