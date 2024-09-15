import type { Meta, StoryObj } from '@storybook/react';
import { OneLineCarouseWrapper } from './one-line-carouse-wrapper';


const meta: Meta<typeof OneLineCarouseWrapper> = {
  title: 'ui/Layouts/OneLineCarouseWrapper',
  component: OneLineCarouseWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof OneLineCarouseWrapper>;

export const Default: Story = {
  args: {
    carouselItems: [
      "test",
      "test2",
      "test3",
    ]
  },
};

export const Horizon: Story = {
  args: {
    carouselItems: [
      "test",
      "test2",
      "test3",
    ],
    direction: 'horizon'
  },
};

export const Vertical: Story = {
  args: {
    carouselItems: [
      "test",
      "test2",
      "test3",
    ],
    direction: 'vertical'
  },
};