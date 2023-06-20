import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
