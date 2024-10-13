import type { Meta, StoryObj } from '@storybook/react';
import ScssComplementaryColor from './scss-complementary-color';

const meta: Meta<typeof ScssComplementaryColor> = {
  title: 'features/SASS-Samples/ScssComplementaryColor',
  component: ScssComplementaryColor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScssComplementaryColor>;

export const Default: Story = {
  args: {
  },
};
