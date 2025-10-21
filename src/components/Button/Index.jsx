import React from "react";
import Button from "./Button"
const Index = () => {
  return (
    <div>
      <h1>Component button</h1>
      <Button
        children="Click me"
        variant="solid"
        size="md"
        color="blue"
        disabled={false}
      />
    </div>
  );
};

export default Index;
