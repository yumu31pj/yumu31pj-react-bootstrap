import type { Meta, StoryObj } from '@storybook/react';
import { default as HamburgerButton, default as HamburgerButtonTypeA } from './hamburger-button';

const meta: Meta<typeof HamburgerButton> = {
  title: 'ui/Buttons/HamburgerButton',
  component: HamburgerButtonTypeA,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerButtonTypeA>;

export const Default: Story = {
  args: {
  },
};
