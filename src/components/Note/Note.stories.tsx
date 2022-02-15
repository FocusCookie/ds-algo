import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Note from "./Note";

export default {
  title: "Components/Note",
  component: Note,
  args: {
    value: "string",
  },
} as ComponentMeta<typeof Note>;

const Template: ComponentStory<typeof Note> = (args) => <Note {...args} />;

export const Default = Template.bind({});
Default.args = { value: "hallo" };
