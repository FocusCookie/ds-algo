import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Sequence from "./Sequence";

export default {
  title: "Components/Sequence",
  component: Sequence,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sequence>;

const Template: ComponentStory<typeof Sequence> = (args) => (
  <Sequence {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "()()()()))",
};
