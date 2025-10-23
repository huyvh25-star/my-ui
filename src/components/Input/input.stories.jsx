import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    // color: {
    //   control: "radio",
    //   options: ["blue", "slate", "red"],
    // },
  },
};

export const Default = {
  args: {
    label: "Email",
  },
};
