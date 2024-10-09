import type { Meta, StoryObj } from '@storybook/react';
import CircleThumbnailArticles from './circle-thumbnail-articles';

const meta: Meta<typeof CircleThumbnailArticles> = {
  title: 'features/Articles/CircleThumbnailArticles',
  component: CircleThumbnailArticles,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CircleThumbnailArticles>;

export const Default: Story = {
  args: {
    articles: [
      {
        linkItem: {
          linkText: "Title Text Title Text",
          linkTo: "#",
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
          linkText: "Title Text Title Text",
          linkTo: "#",
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
          linkText: "Title Text Title Text",
          linkTo: "#",
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
          linkText: "Title Text Title Text",
          linkTo: "#",
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
          linkText: "Title Text Title Text",
          linkTo: "#",
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
          linkText: "Title Text Title Text",
          linkTo: "#",
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
    ]
  },
};