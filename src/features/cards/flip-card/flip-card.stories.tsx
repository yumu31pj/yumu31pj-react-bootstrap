import type { Meta, StoryObj } from '@storybook/react';
import { Picture } from '../../../components/ui/image';
import { Title } from '../../../components/ui/title';
import FlipCard from './flip-card';

const meta: Meta<typeof FlipCard> = {
  title: 'features/Cards/FlipCard',
  component: FlipCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof FlipCard>;

export const Default: Story = {
  args: {
    frontCard: (
      <>
        <Picture
          srcSP={"/src/assets/images/750x860.png"}
          altText={"front"}
        />
        <div style={{padding: "10px"}}>
          <Title tag='h2' text='Front Title' />
        </div>
      </>
    ),
    backCard: (
      <div>
        <div style={{padding: "10px"}}>
          <Title tag='h2' text='Back Title' />
          <p>Back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text, back text.</p>
        </div>
        <Picture
          srcSP={"/src/assets/images/750x750.png"}
          altText={"back"}
        />
      </div>
    )
  },
};
