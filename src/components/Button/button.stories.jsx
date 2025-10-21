import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "radio",
      options: ["blue", "red", "green"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export const Default = {
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    color: "blue",
    disabled: false,
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
    color: "red",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const OutBlue = {
  args:{
    children:"Outline Button",
    variant:"outline",
    size:"md",
    color:"blue"
  }
};
