import type { Meta, StoryObj } from '@storybook/react';
import ArticleCards from './article-cards';


const meta: Meta<typeof ArticleCards> = {
  title: 'features/Articles/ArticleCards',
  component: ArticleCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCards>;

export const Default: Story = {
  args: {
    articles: [
      {
        id: "123",
        title: "Content Title3",
        publishedAt: "2024/09/03",
        imageItem: {
          srcSP: "/src/assets/images/750x750.png",
          srcWebpSP: "/src/assets/images/750x750.webp",
          srcPC: "/src/assets/images/750x750.png",
          srcWebpPC: "/src/assets/images/750x750.webp",
          width: 375,
          height: 430,
          altText: "carouse1",
          breakpoint: 961
        },
        categories: [
          "Category 1"
        ],
      },
      {
        id: "123",
        title: "Content Title2",
        publishedAt: "2024/09/02",
        imageItem: {
          srcSP: "/src/assets/images/750x750.png",
          srcWebpSP: "/src/assets/images/750x750.webp",
          srcPC: "/src/assets/images/750x750.png",
          srcWebpPC: "/src/assets/images/750x750.webp",
          width: 375,
          height: 430,
          altText: "carouse1",
          breakpoint: 961
        },
        categories: [
          "Category 1"
        ],
      },
      {
        id: "123",
        title: "Content Title1",
        publishedAt: "2024/09/01",
        imageItem: {
          srcSP: "/src/assets/images/750x750.png",
          srcWebpSP: "/src/assets/images/750x750.webp",
          srcPC: "/src/assets/images/750x750.png",
          srcWebpPC: "/src/assets/images/750x750.webp",
          width: 375,
          height: 430,
          altText: "carouse1",
          breakpoint: 961
        },
        categories: [
          "Category 1", "Category 2", "Category 3"
        ],
      }
    ]
  },
};