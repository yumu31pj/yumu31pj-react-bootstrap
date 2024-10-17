import type { Meta, StoryObj } from '@storybook/react';
import { TellText } from './tell-text';

const meta: Meta<typeof TellText> = {
  title: 'ui/Texts/TellLink',
  component: TellText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TellText>;

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