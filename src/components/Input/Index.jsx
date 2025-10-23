import React from "react";
import Input from "./Input";

const Index = () => {
  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Input Component</h1>
        <p className="text-gray-600 mt-2">
          Hướng dẫn sử dụng component <strong>Input</strong> — hiển thị các biến
          thể, màu sắc và kích thước.
        </p>
        <div className="mt-5 p-5">
          <Input placeholder="input blue" color="blue" />
        </div>
        <div className="mt-5 p-5">
          <Input placeholder="input red" color="red" />
        </div>
        <div className="mt-5 p-5">
          <Input placeholder="input slate" color="slate" />
        </div>
      </div>
    </div>
  );
};

export default Index;
