import type { Meta, StoryObj } from '@storybook/react';
import { ScrollSnapWrapper } from './scroll-snap-wrapper';

const meta: Meta<typeof ScrollSnapWrapper> = {
  title: 'ui/Layouts/ScrollSnapWrapper',
  component: ScrollSnapWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScrollSnapWrapper>;

export const Default: Story = {
  args: {
    children: (
      <>
        <section style={{ backgroundColor: 'lightcoral' }}>1</section>
          <section style={{ backgroundColor: 'lightblue' }}>2</section>
          <section style={{ backgroundColor: 'lightgreen' }}>3</section>
          <section style={{ backgroundColor: 'lightyellow' }}>4</section>
          <section style={{ backgroundColor: 'lightpink' }}>5</section>
      </>
    )
  },
};
