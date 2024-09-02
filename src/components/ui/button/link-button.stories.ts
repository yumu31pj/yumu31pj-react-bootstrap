import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './link-button';

const meta: Meta<typeof LinkButton> = {
  title: 'ui/Buttons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    linkText: "Default Link",
    linkTo: "#",
    isExternal: false,
  },
};

export const flip: Story = {
  args: {
    linkText: "Flip Link",
    linkTo: "#",
    isExternal: false,
    type: "flip"
  },
};

export const ThreeD: Story = {
  args: {
    linkText: "Three D Link",
    linkTo: "#",
    isExternal: false,
    type: "3d"
  },
};

export const label: Story = {
  args: {
    linkText: "Label",
    linkTo: "#",
    isExternal: false,
    type: "label"
  },
};
