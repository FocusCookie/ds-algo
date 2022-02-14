import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Stack from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  args: {},
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: ["(", "(", "(", ")"],
};
