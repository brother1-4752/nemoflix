import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { Detail } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":category/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
