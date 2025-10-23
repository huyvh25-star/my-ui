import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["blue", "red", "green", "yellow", "default"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export const Default = {
  args:{
    children:"button",
    variant:"solid",
    size:"md",
    color:"default",
    disabled:false,
  },
};

export const Outline = {
  args:{
    children:"Outline",
    variant:"outline",
    size:"md",
    color:"red",
  },
};

export const Disabled = {
  args:{
    children:"Disabled",
    disabled:true,
  },
};
