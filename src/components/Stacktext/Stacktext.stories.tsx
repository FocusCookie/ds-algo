import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Stacktext from "./Stacktext";

export default {
  title: "Components/Stacktext",
  component: Stacktext,
  args: {},
} as ComponentMeta<typeof Stacktext>;

const Template: ComponentStory<typeof Stacktext> = (args) => (
  <Stacktext {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Push = Template.bind({});
Push.args = {
  method: "push",
  arg: "123",
};

export const Pop = Template.bind({});
Pop.args = {
  method: "pop",
};

export const Peek = Template.bind({});
Peek.args = {
  method: "peek",
};

export const IsEmpty = Template.bind({});
IsEmpty.args = {
  method: "isEmpty",
};
