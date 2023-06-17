import { createBrowserRouter } from "react-router-dom";

import Authorization from "@/components/templates/Authorization/Authorization";
import { Home, Login } from "@/pages";

interface RouterBase {
  path: string;
  label: string;
  element: React.ReactNode;
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
    withAuth: true, //logged로 고정
  },
  {
    path: "/login",
    label: "Login",
    element: <Login />,
    withAuth: false,
  },
];

const router = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: (
        <Authorization isLogged={"withAuth" in router && router.withAuth}>
          {router.element}
        </Authorization>
      ),
    };
  })
);

export default router;
