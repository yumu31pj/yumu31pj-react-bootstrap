import type { Meta, StoryObj } from '@storybook/react';
import TitleHighlightedArticles from './title-highlighted-articles';


const meta: Meta<typeof TitleHighlightedArticles> = {
  title: 'features/Articles/TitleHighlightedArticles',
  component: TitleHighlightedArticles,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TitleHighlightedArticles>;

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
        },
        date: "2024-10-01"
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
        },
        date: "2024-10-01"
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
        },
        date: "2024-10-01"
      }
    ]
  },
};