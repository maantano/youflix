import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./App.css";
import Main from "./pages/Main";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
