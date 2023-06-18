import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

const client = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
