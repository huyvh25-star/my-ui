import Button from "../components/Button/Index";
import ComponentLayout from "../layout/ComponentLayout";
import DefaultLayout from "../layout/DefaultLayout";
// import GetStartedLayout from "../layout/GetStartedLayout";
import Input from "../components/Input/Index";
// import Content from "../pages/Content";
export default [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      // { index: true, element: <GetStartedLayout /> },
      {
        path: "/component",
        element: <ComponentLayout />,
        children: [
          { path: "/component/button", element: <Button /> },
          { path: "/component/input", element: <Input /> },
        ],
      },
    ],
  },
];
