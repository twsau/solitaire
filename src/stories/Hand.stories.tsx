import type { Meta, StoryObj } from "@storybook/react";
import getFullDeck from "@/func/getFullDeck";
import { Hand } from "@/components/stacks/Hand";

const meta: Meta<typeof Hand> = {
  title: "Example/Hand",
  component: Hand,
};

export default meta;

type Story = StoryObj<typeof Hand>;

export const FullStack: Story = {
  args: {
    cards: getFullDeck(),
  },
};

export const HalfStack: Story = {
  args: {
    cards: new Set([...getFullDeck()].slice(0, 26)),
  },
};
