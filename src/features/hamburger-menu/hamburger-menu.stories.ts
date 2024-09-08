import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenu from "./hamburger-menu";

const meta: Meta<typeof HamburgerMenu> = {
  title: 'features/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
  args: {
    children: "Test"
  },
};
