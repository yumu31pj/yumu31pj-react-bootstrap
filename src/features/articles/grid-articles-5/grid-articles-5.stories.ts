import type { Meta, StoryObj } from '@storybook/react';
import GridArticlesFive from './grid-articles-5';

const meta: Meta<typeof GridArticlesFive> = {
  title: 'features/ArticleCards/GridArticlesFive',
  component: GridArticlesFive,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GridArticlesFive>;

export const Default: Story = {
  args: {
    articles: [
      {
        title: "Title Text Title Text",
        linkTo: "#",
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
        category: {
          linkText: "category",
          linkTo: "#"
        },
        date: "2024-10-01"
      },
      {
        title: "Title Text Title Text",
        linkTo: "#",
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
        category: {
          linkText: "category",
          linkTo: "#"
        },
        date: "2024-10-01"
      },
      {
        title: "Title Text Title Text",
        linkTo: "#",
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
        category: {
          linkText: "category",
          linkTo: "#"
        },
        date: "2024-10-01"
      },
      {
        title: "Title Text Title Text",
        linkTo: "#",
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
        category: {
          linkText: "category",
          linkTo: "#"
        },
        date: "2024-10-01"
      },
      {
        title: "Title Text Title Text",
        linkTo: "#",
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
        category: {
          linkText: "category",
          linkTo: "#"
        },
        date: "2024-10-01"
      }
    ]
  },
};