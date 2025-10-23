import Select from "./Select";

const arrays = ["Java", "C#", "Go"];

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"], // tuỳ chọn, giúp tạo docs tự động
  argTypes: {
    label: { control: "text" }, // <-- sửa lại chính tả
    options: { control: "object" },
  },
};

export const Default = {
  args: {
    label: "Languages",
    options: arrays,
  },
};
