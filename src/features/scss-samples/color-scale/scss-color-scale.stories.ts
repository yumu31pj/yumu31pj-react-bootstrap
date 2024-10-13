import type { Meta, StoryObj } from '@storybook/react';
import ScssColorScale from './scss-color-scale';

const meta: Meta<typeof ScssColorScale> = {
  title: 'features/SASS-Samples/ScssColorScale',
  component: ScssColorScale,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScssColorScale>;

export const Default: Story = {
  args: {
  },
};
