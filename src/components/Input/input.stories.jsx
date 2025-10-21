import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    color: {
      control: "radio",
      options: ["blue", "slate", "red"],
    },
  },
};

export const Default = {
  args: {
    placeholder: "input default",
    color: "slate",
  },
};

export const Blue = {
  args:{
    placeholder:"input blue",
    color:"blue",
  },
};

export const Red = {
  args:{
    placeholder:"input red",
    color:"red",
  },
};
