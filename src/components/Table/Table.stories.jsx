import Table from "./Table";

export default {
  title: "Displays/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    headers: {
      control: "object",
      description: "Danh sách tiêu đề cột",
    },
    data: {
      control: "object",
      description: "Dữ liệu dạng mảng 2 chiều (rows và cells)",
    },
  },
};

export const Default = {
  args: {
    headers: ["ID", "Tên", "Ngôn ngữ", "Trạng thái"],
    data: [
      [1, "Nguyễn Văn A", "JavaScript", "Hoạt động"],
      [2, "Trần Thị B", "Python", "Tạm dừng"],
      [3, "Lê Văn C", "Go", "Hoạt động"],
    ],
  },
};
