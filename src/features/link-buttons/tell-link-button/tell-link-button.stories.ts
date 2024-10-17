import type { Meta, StoryObj } from '@storybook/react';
import TellLinkButton from './tell-link-button';

const meta: Meta<typeof TellLinkButton> = {
  title: 'features/LinkButtons/TellLinkButton',
  component: TellLinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TellLinkButton>;

export const NoIcon: Story = {
  args: {
    telnumItem: {
      telnum: "092-123-4567",
      hasIcon: true,
      color: 'white',
    },
    upperText: "Tap here to contact us via phone",
    lowerText: "Shop: 9:00 ~ 17:00 on Weekday"
  },
};