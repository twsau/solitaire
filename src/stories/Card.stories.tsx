import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  // ...
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
    value: 1,
    suit: "hearts",
    facing: "down",
  },
};
