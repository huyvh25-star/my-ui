import { useState } from "react";
import Button from "./Button";

const Index = () => {
  const [preview, setPreview] = useState(true);
  return (
    <div className="p-8 bg-gray-50 w-full h-full overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Button Component</h1>
        <p className="text-gray-600 mt-2">
          Hướng dẫn sử dụng component <strong>Button</strong> — hiển thị các
          biến thể, màu sắc và kích thước.
        </p>
      </div>

      {/* Toggle preview/code */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          children="Preview"
          variant={preview ? "solid" : "outline"}
          size="sm"
          color="blue"
          onClick={() => setPreview(true)}
        />
        <Button
          children="Show code"
          variant={!preview ? "solid" : "outline"}
          size="sm"
          color="green"
          onClick={() => setPreview(false)}
        />
      </div>

      {/* Section template */}
      <Section title="Basic Button">
        {preview ? (
          <Button variant="solid" size="md" color="blue">
            button
          </Button>
        ) : (
          <CodeBlock
            code={`<Button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none text-base px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">button</Button>`}
          />
        )}
      </Section>

      <Section title="Button Size">
        {preview ? (
          <div className="">
            <Button size="sm" color="blue" className={"mr-5"}>
              Small
            </Button>
            <Button size="md" color="blue" className={"mr-5"}>
              Medium
            </Button>
            <Button size="lg" color="blue">
              Large
            </Button>
          </div>
        ) : (
          <div>
            <CodeBlock
              code={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none text-sm px-3 py-1.5 bg-blue-500 text-white hover:bg-blue-600 mr-5`}
            />
            <CodeBlock
              code={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none text-base px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 mr-5`}
            />
            <CodeBlock
              code={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none text-lg px-5 py-3 bg-blue-500 text-white hover:bg-blue-600`}
            />
          </div>
        )}
      </Section>

      <Section title="Button Color">
        {preview ? (
          <div className="flex flex-wrap gap-4">
            <Button color="blue">Blue</Button>
            <Button color="red">Red</Button>
            <Button color="green">Green</Button>
          </div>
        ) : (
          <div>
            <CodeBlock
              code={`inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 bg-blue-500 text-white hover:bg-blue-600`}
            />
            <CodeBlock
              code={`inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 bg-red-500 text-white hover:bg-red-600`}
            />
            <CodeBlock
              code={`inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 bg-green-500 text-white hover:bg-green-600`}
            />
          </div>
        )}
      </Section>

      <Section title="Outline Variant">
        {preview ? (
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" color="blue">
              Blue
            </Button>
            <Button variant="outline" color="red">
              Red
            </Button>
            <Button variant="outline" color="green">
              Green
            </Button>
          </div>
        ) : (
          <div>
            <CodeBlock
              code={
                "inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 border border-blue-500 text-blue-500 hover:bg-blue-200"
              }
            />
            <CodeBlock
              code={
                "inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 border border-red-500 text-red-500 hover:bg-red-200"
              }
            />
            <CodeBlock
              code={
                "inline-flex items-center min-w-20 justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none text-base px-2.5 py-2 border border-green-500 text-green-500 hover:bg-green-200"
              }
            />
          </div>
        )}
      </Section>
    </div>
  );
};

/* Section wrapper */
const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
    <div>{children}</div>
  </div>
);

/* Code block style */
const CodeBlock = ({ code }) => (
  <pre className="bg-gray-900 text-gray-100 text-sm rounded-xl p-4 overflow-x-auto">
    <code>{code}</code>
  </pre>
);

export default Index;
