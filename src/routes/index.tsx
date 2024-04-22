import { createBrowserRouter } from "react-router-dom";
import type { LoaderFunction } from "react-router-dom";

import { Home, Login } from "@/components/pages";
import DetailModal from "@/components/pages/detail/DetailModal";

interface RouterBase {
  path: string;
  label: string;
  element: React.ReactNode;
  loader?: LoaderFunction;
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean;
  children?: RouterElement[];
}

interface AdminAccessibleRouterElement extends RouterBase {
  withAuth: true;
  isAdminPage?: boolean;
}

type RouterElement = UserAccessibleRouterElement | AdminAccessibleRouterElement;

const routerData: RouterElement[] = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
    children: [
      {
        path: "movie/:movieId",
        label: "Detail",
        element: <DetailModal />,
        withAuth: false,
      },
    ],
  },
  {
    path: "/login",
    label: "Login",
    element: <Login />,
    withAuth: false,
  },
];

const router = createBrowserRouter(routerData);

export default router;
