import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./url-shortend/ui/pages/HomePage.jsx";

import {
 
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <HomePage />
  </QueryClientProvider>,
);
