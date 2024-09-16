import type { Meta, StoryObj } from '@storybook/react';
import { NoLinkButton } from './no-link-button';

const meta: Meta<typeof NoLinkButton> = {
  title: 'ui/Buttons/NoLinkButton',
  component: NoLinkButton,
  tags: ['autodocs'],
  parameters: {
    
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof NoLinkButton>;

export const Primary: Story = {
  args: {
    buttonText: "Default Link",
  },
};