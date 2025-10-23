import Card from "./Card";

export default {
  title: "Displays/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

// Tạo "story" Default
export const Default = {
  args: {
    title: "Card",
    children: "My Card",
    image: "assets/react.svg", // Đảm bảo đường dẫn ảnh đúng
  },
};
