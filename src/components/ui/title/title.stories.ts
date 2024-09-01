import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './title';

const meta: Meta<typeof Title> = {
  title: 'ui/Titles/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    tag: "h1",
    text: "H1 title text"
  }
};

export const H2: Story = {
  args: {
    tag: "h2",
    text: "H2 title text"
  }
};

export const H3: Story = {
  args: {
    tag: "h3",
    text: "H3 title text"
  }
};

export const H4: Story = {
  args: {
    tag: "h4",
    text: "H4 title text"
  }
};

export const H5: Story = {
  args: {
    tag: "h5",
    text: "H5 title text"
  }
};

export const H6: Story = {
  args: {
    tag: "h6",
    text: "H6 title text"
  }
};