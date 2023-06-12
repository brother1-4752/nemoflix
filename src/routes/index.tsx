import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { Comingsoon, Home, Nowplaying } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "coming-soon",
        element: <Comingsoon />,
      },
      {
        path: "now-playing",
        element: <Nowplaying />,
      },
    ],
  },
]);

export default router;
