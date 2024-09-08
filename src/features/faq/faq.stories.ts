import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import { default as FAQ } from './faq';

const meta: Meta<typeof FAQ> = {
  title: 'features/List/FAQ',
  component: FAQ,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FAQ>;

export const Primary: Story = {
  args: {
    faqItems: [
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
    ]
  },
};
