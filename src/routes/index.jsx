import DefaultLayout from "../layout/DefaultLayout";
import Content from "../pages/Content";
export default [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <Content /> }],
  },
];
