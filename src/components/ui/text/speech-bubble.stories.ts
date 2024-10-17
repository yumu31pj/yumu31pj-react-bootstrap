import type { Meta, StoryObj } from '@storybook/react';
import { SpeechBubble } from './speech-bubble';

const meta: Meta<typeof SpeechBubble> = {
  title: 'ui/Texts/SpeechBubble',
  component: SpeechBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SpeechBubble>;

export const Primary: Story = {
  args: {
    text: "In the last panel, the speech bubble revealed the character’s secret",
  },
};