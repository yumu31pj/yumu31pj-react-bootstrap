import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import Conversations from "./conversations";

const meta: Meta<typeof Conversations> = {
  title: 'features/List/Conversations',
  component: Conversations,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Conversations>;

export const Default: Story = {
  args: {
    conversations: [
      {
        speaker: {
          person: {
            speakerId: 1, 
            name: "Parson A",
            iconItem: {
              srcSP: "/src/assets/images/sample_face_man.png",
              width: 50,
              height: 50,
              altText: "who",
            }
          },
          comment: "aaaaaaaaaaaaaa"
      }},
      {
        speaker: {
          person: {
            speakerId: 2, 
            name: "Parson B",
            iconItem: {
              srcSP: "/src/assets/images/sample_face_woman.png",
              width: 50,
              height: 50,
              altText: "Parson B",
            }
          },
          comment: "bbbbbbbbbbbbb"
      }},
      {
        speaker: {
          person: {
            speakerId: 1, 
            name: "Parson A",
            iconItem: {
              srcSP: "/src/assets/images/sample_face_man.png",
              width: 50,
              height: 50,
              altText: "who",
            }
          },
          comment: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br class='br--pc'>aaaaaaaaaaaaaaaaaa"
      }},
      {
        speaker: {
          person: {
            speakerId: 2, 
            name: "Parson B",
            iconItem: {
              srcSP: "/src/assets/images/sample_face_woman.png",
              width: 50,
              height: 50,
              altText: "Parson B",
            }
          },
          comment: "bbbbbbbbbbbbbbbbbbb<br class='br--pc'>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br>bbbbbbbbbbbbbbbbbbb"
      }}
    ]
  },
};
