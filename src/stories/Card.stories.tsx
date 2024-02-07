import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  argTypes: {
    value: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      control: "select",
    },
    suit: {
      options: ["hearts", "diamonds", "clubs", "spades"],
      control: "select",
    },
    facing: {
      options: ["up", "down"],
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<Card>;

export const FaceUp: Story = {
  args: {
    value: 1,
    suit: "hearts",
    facing: "up",
  },
};

export const FaceDown: Story = {
  args: {
    facing: "down",
  },
};
