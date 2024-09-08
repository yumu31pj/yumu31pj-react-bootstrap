import type { Meta, StoryObj } from '@storybook/react';
import LinkButton3D from './link-button-3d';

const meta: Meta<typeof LinkButton3D> = {
  title: 'ui/Links/LinkButton3D',
  component: LinkButton3D,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton3D>;

export const Internal: Story = {
  args: {
    linkText: "Innernal Link",
    linkTo: "#",
    isExternal: false
  },
};

export const External: Story = {
  args: {
    linkText: "External Link",
    linkTo: "#",
    isExternal: true
  },
};
