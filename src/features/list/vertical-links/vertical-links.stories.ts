import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import VerticalLinks from "./vertical-links";

const meta: Meta<typeof VerticalLinks> = {
  title: 'features/List/VerticalLinks',
  component: VerticalLinks,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof VerticalLinks>;

export const Default: Story = {
  args: {
    linkItems: [
      {linkText: "Top", linkTo: "/"},
      {linkText: "About", linkTo: "/about/"},
      {linkText: "Github", linkTo: "https://github.com/", isExternal: true}
    ]
  },
};
