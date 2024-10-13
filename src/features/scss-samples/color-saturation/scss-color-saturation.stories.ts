import type { Meta, StoryObj } from '@storybook/react';
import ScssColorSaturation from './scss-color-saturation';

const meta: Meta<typeof ScssColorSaturation> = {
  title: 'features/SASS-Samples/ScssColorSaturation',
  component: ScssColorSaturation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScssColorSaturation>;

export const Default: Story = {
  args: {
  },
};
