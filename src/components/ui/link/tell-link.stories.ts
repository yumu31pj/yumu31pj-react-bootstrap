import type { Meta, StoryObj } from '@storybook/react';
import { TellLink } from './tell-link';

const meta: Meta<typeof TellLink> = {
  title: 'ui/Links/TellLink',
  component: TellLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TellLink>;

export const NoIcon: Story = {
  args: {
    telnum: "092-123-4567",
    hasIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    telnum: "092-123-4567",
    hasIcon: true,
  },
};

export const PrimaryColour: Story = {
  args: {
    telnum: "092-123-4567",
    hasIcon: true,
    color: "primary"
  },
};

export const AccentColour: Story = {
  args: {
    telnum: "092-123-4567",
    hasIcon: true,
    color: "accent"
  },
};