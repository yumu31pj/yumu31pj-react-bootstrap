import type { Meta, StoryObj } from '@storybook/react';
import SlatSliderCards from './slat-slider-cards';

const meta: Meta<typeof SlatSliderCards> = {
  title: 'features/Cards/SlatSliderCards',
  component: SlatSliderCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SlatSliderCards>;

export const Default: Story = {
  args: {
  },
};
