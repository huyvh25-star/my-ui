import Textarea from "./Textarea";
export default {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    lable: { control: "text" },
  },
};

export const Default = {
  args: {
    label: "Description",
  },
};
